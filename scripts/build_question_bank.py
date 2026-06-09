#!/usr/bin/env python3
"""Build a structured XSIAM quiz question bank from category folders."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
QUESTIONS_ROOT = ROOT / "Questions"
GENERATED_ROOT = ROOT / "GeneratedQuestions"
DEFAULT_OUTPUT = ROOT / "data" / "questions.json"
DEFAULT_REVIEW = ROOT / "data" / "questions_review.md"
IGNORED_DIRS = {"app", "data", "scripts", ".git", "__pycache__"}
QUIZ_MODULE = "Quiz Bank"
GENERATED_MODULE = "Training Lessons"

QUESTION_RE = re.compile(r"^Question\s+(\d+)\s+of\s+(\d+)", re.IGNORECASE)
SCORE_RE = re.compile(r"^Score:\s*\d+$", re.IGNORECASE)
QUESTIONNAIRE_RE = re.compile(r"questionnaire-(\d+)\.txt$", re.IGNORECASE)


def clean_text(value: str) -> str:
    value = value.strip()
    try:
        fixed = value.encode("cp1252").decode("utf-8")
        if "â" in value and "â" not in fixed:
            value = fixed
    except UnicodeError:
        pass
    return re.sub(r"\s+", " ", value).strip()


def normalize_lines(text: str) -> list[str]:
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    return [clean_text(line) for line in text.split("\n") if clean_text(line)]


def source_sort_key(path: Path) -> tuple[str, int, str]:
    match = QUESTIONNAIRE_RE.search(path.name)
    number = int(match.group(1)) if match else 0
    return (path.parent.name.lower(), number, path.name.lower())


def category_dirs(root: Path) -> list[Path]:
    return sorted(
        [
            path
            for path in root.iterdir()
            if path.is_dir() and path.name not in IGNORED_DIRS and list(path.glob("*.txt"))
        ],
        key=lambda path: path.name.lower(),
    )


def split_question_blocks(lines: list[str]) -> list[list[str]]:
    blocks: list[list[str]] = []
    current: list[str] = []

    for line in lines:
        if QUESTION_RE.match(line):
            if current:
                blocks.append(current)
            current = [line]
        elif current:
            current.append(line)

    if current:
        blocks.append(current)

    return blocks


def is_noise(line: str) -> bool:
    lower = line.lower()
    return (
        lower == "options"
        or lower == "correct answer"
        or lower == "wrong answer"
        or lower == "(disabled)"
        or lower.startswith("you gave the correct answer")
        or lower.startswith("you gave the wrong answer")
        or bool(SCORE_RE.match(line))
    )


def split_prompt_and_options(lines: list[str], correct_answers: list[str]) -> tuple[str, list[str]]:
    options_marker = next((index for index, line in enumerate(lines) if line.lower() == "options"), len(lines))
    useful = [line for line in lines[:options_marker] if not is_noise(line)]
    max_option_count = min(8, len(useful))
    min_option_count = min(4, max_option_count)
    if len(useful) < 5:
        min_option_count = min(2, max_option_count)

    option_count = min_option_count
    for count in range(min_option_count, max_option_count + 1):
        suffix = useful[-count:]
        if len(useful) - count >= 1 and all(answer in suffix for answer in correct_answers):
            option_count = count
            break

    options = useful[-option_count:] if option_count else []
    prompt_lines = useful[:-option_count] if option_count else useful
    return " ".join(prompt_lines).strip(), options


def answer_marker_index(block: list[str]) -> int | None:
    for index in range(len(block) - 1, -1, -1):
        if re.match(r"^Correct answers?:$", block[index], re.IGNORECASE):
            return index
    return None


def parse_question(block: list[str], category: str, source_file: Path) -> tuple[dict | None, list[str]]:
    warnings: list[str] = []
    header = block[0]
    match = QUESTION_RE.match(header)
    if not match:
        return None, [f"{source_file}: invalid question header: {header}"]

    question_number = int(match.group(1))
    total_questions = int(match.group(2))
    marker = answer_marker_index(block)

    if marker is None:
        return None, [f"{source_file}: question {question_number} has no correct answer marker"]

    raw_answers: list[str] = []
    for line in block[marker + 1 :]:
        if QUESTION_RE.match(line) or is_noise(line):
            continue
        raw_answers.append(line)

    if not raw_answers:
        return None, [f"{source_file}: question {question_number} has no correct answer value"]

    prompt, options = split_prompt_and_options(block[1:marker], raw_answers)
    if not prompt:
        warnings.append(f"{source_file}: question {question_number} has no prompt")

    if len(options) < 2:
        warnings.append(f"{source_file}: question {question_number} has only {len(options)} option(s)")

    missing = [answer for answer in raw_answers if answer not in options]
    if missing:
        warnings.append(
            f"{source_file}: question {question_number} answer(s) not found in options: {', '.join(missing)}"
        )

    questionnaire_match = QUESTIONNAIRE_RE.search(source_file.name)
    questionnaire_number = int(questionnaire_match.group(1)) if questionnaire_match else 0
    category_slug = re.sub(r"[^a-z0-9]+", "-", category.lower()).strip("-")
    question_id = f"{category_slug}-{questionnaire_number}-{question_number}"

    question = {
        "id": question_id,
        "module": QUIZ_MODULE,
        "source_type": "quiz_export",
        "category": category,
        "source_file": str(source_file.relative_to(ROOT)).replace("\\", "/"),
        "source_quiz": source_file.stem,
        "questionnaire_number": questionnaire_number,
        "question_number": question_number,
        "total_questions": total_questions,
        "question": prompt,
        "options": options,
        "correct_answers": raw_answers,
        "answer_type": "multiple" if len(raw_answers) > 1 else "single",
    }
    question["correct_answer"] = raw_answers[0] if len(raw_answers) == 1 else None

    return question, warnings


def load_generated_questions(root: Path) -> tuple[list[dict], list[str]]:
    questions: list[dict] = []
    warnings: list[str] = []

    if not root.exists():
        return questions, warnings

    for json_file in sorted(root.rglob("*.json")):
        try:
            payload = json.loads(json_file.read_text(encoding="utf-8"))
        except json.JSONDecodeError as error:
            warnings.append(f"{json_file}: invalid JSON: {error}")
            continue

        items = payload.get("questions", payload) if isinstance(payload, dict) else payload
        if not isinstance(items, list):
            warnings.append(f"{json_file}: expected a question list or an object with a questions list")
            continue

        for index, item in enumerate(items, start=1):
            if not isinstance(item, dict):
                warnings.append(f"{json_file}: item {index} is not an object")
                continue

            correct_answers = item.get("correct_answers") or item.get("correct_answer")
            if isinstance(correct_answers, str):
                correct_answers = [correct_answers]

            question = {
                **item,
                "id": item.get("id") or f"generated-{json_file.stem}-{index}",
                "module": item.get("module") or GENERATED_MODULE,
                "source_type": item.get("source_type") or "generated_lesson",
                "category": item.get("category") or json_file.parent.name,
                "source_file": item.get("source_file") or str(json_file.relative_to(ROOT)).replace("\\", "/"),
                "source_quiz": item.get("source_quiz") or json_file.stem,
                "options": item.get("options") or [],
                "correct_answers": correct_answers or [],
            }
            question["answer_type"] = "multiple" if len(question["correct_answers"]) > 1 else "single"
            question["correct_answer"] = question["correct_answers"][0] if len(question["correct_answers"]) == 1 else None

            if not question.get("question"):
                warnings.append(f"{json_file}: item {index} has no question text")
            if len(question["options"]) < 2:
                warnings.append(f"{json_file}: item {index} has fewer than two options")
            if not question["correct_answers"]:
                warnings.append(f"{json_file}: item {index} has no correct answer")

            questions.append(question)

    return questions, warnings


def build_bank(root: Path, generated_root: Path = GENERATED_ROOT) -> tuple[list[dict], list[str]]:
    questions: list[dict] = []
    warnings: list[str] = []

    for category_dir in category_dirs(root):
        for text_file in sorted(category_dir.glob("*.txt"), key=source_sort_key):
            lines = normalize_lines(text_file.read_text(encoding="utf-8"))
            for block in split_question_blocks(lines):
                question, question_warnings = parse_question(block, category_dir.name, text_file)
                warnings.extend(question_warnings)
                if question:
                    questions.append(question)

    generated_questions, generated_warnings = load_generated_questions(generated_root)
    questions.extend(generated_questions)
    warnings.extend(generated_warnings)

    return questions, warnings


def write_review(questions: list[dict], warnings: list[str], output_path: Path) -> None:
    lines = ["# XSIAM Question Bank Review", ""]

    if warnings:
        lines.extend(["## Parser Warnings", ""])
        lines.extend(f"- {warning}" for warning in warnings)
        lines.append("")

    current_module = None
    current_category = None
    current_source = None
    for question in questions:
        if question["module"] != current_module:
            current_module = question["module"]
            current_category = None
            current_source = None
            lines.extend([f"## {current_module}", ""])

        if question["category"] != current_category:
            current_category = question["category"]
            current_source = None
            lines.extend([f"### {current_category}", ""])

        if question["source_file"] != current_source:
            current_source = question["source_file"]
            lines.extend([f"#### {current_source}", ""])

        question_number = question.get("question_number", "")
        question_title = f"Question {question_number}".strip()
        lines.extend([f"##### {question_title}", "", question["question"], ""])
        for option in question["options"]:
            marker = "[x]" if option in question["correct_answers"] else "[ ]"
            lines.append(f"{marker} {option}")
        lines.extend(["", f"Correct: {'; '.join(question['correct_answers'])}", ""])

    output_path.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Build the XSIAM practice quiz question bank.")
    parser.add_argument("--root", type=Path, default=QUESTIONS_ROOT, help="Folder containing category folders")
    parser.add_argument("--generated-root", type=Path, default=GENERATED_ROOT, help="Folder containing generated question JSON")
    parser.add_argument("--json", type=Path, default=DEFAULT_OUTPUT, help="Output JSON path")
    parser.add_argument("--review", type=Path, default=DEFAULT_REVIEW, help="Output Markdown review path")
    args = parser.parse_args()

    questions, warnings = build_bank(args.root, args.generated_root)
    args.json.parent.mkdir(parents=True, exist_ok=True)
    args.review.parent.mkdir(parents=True, exist_ok=True)

    payload = {
        "generated_by": "scripts/build_question_bank.py",
        "question_count": len(questions),
        "categories": sorted({question["category"] for question in questions}),
        "modules": sorted({question["module"] for question in questions}),
        "questions": questions,
    }
    args.json.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
    write_review(questions, warnings, args.review)

    print(f"Parsed questions: {len(questions)}")
    print(f"Warnings: {len(warnings)}")
    print(f"Wrote JSON: {args.json}")
    print(f"Wrote review: {args.review}")


if __name__ == "__main__":
    main()
