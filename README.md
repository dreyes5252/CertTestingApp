# Cert Testing App

Static Cortex XSIAM practice quiz app built from copied quiz exports, generated lesson questions, and transcript-derived quizzes.

The app runs entirely in the browser and loads its question bank from `data/questions.json`.

## Question Sources

The **Question Source** dropdown is generated from the `module` values in `data/questions.json`.

Current source modules:

- `Quiz Bank` - copied quiz-export questions parsed from `Questions/` category folders.
- `Training Lessons` - reviewed lesson-generated JSON questions from `GeneratedQuestions/`.
- `Transcript Quizzes` - converted questions from `Transcripts/_ALL_QUIZZES.json`.

Category scoring is based on each question's `category` field. For transcript quizzes, categories are mapped to the transcript domain labels, such as `2.3 Marketplace content packs`, so results are useful for exam-domain review.

## Project Layout

- `app/` contains the dependency-free static web UI.
- `Questions/` contains source questionnaire text files grouped by category.
- `GeneratedQuestions/` contains reviewed generated question JSON files.
- `Transcripts/` contains transcript quiz exports and training-material transcript artifacts.
- `data/questions.json` is generated data consumed by the browser app.
- `data/questions_review.md` is generated for manual review of parsed questions and answers.
- `scripts/build_question_bank.py` builds the merged question bank.

## Build the Question Bank

Run commands inside the Ubuntu WSL distro. From PowerShell:

```powershell
wsl -d Ubuntu -- bash -lc "cd /mnt/c/Users/dareyes/Work/CertTestingApp && python3 scripts/build_question_bank.py"
```

If already inside WSL:

```bash
cd /mnt/c/Users/dareyes/Work/CertTestingApp
python3 scripts/build_question_bank.py
```

The script writes:

- `data/questions.json`
- `data/questions_review.md`

Review `data/questions_review.md` after adding or changing questionnaire files, generated lesson questions, or transcript quiz exports.

## Run the App

From PowerShell:

```powershell
wsl -d Ubuntu -- bash -lc "cd /mnt/c/Users/dareyes/Work/CertTestingApp && python3 -m http.server 8788 --bind 127.0.0.1"
```

If already inside WSL:

```bash
cd /mnt/c/Users/dareyes/Work/CertTestingApp
python3 -m http.server 8788 --bind 127.0.0.1
```

Open:

```text
http://localhost:8788/app/
```

Stop a foreground server with `Ctrl+C`. Stop a detached WSL server with:

```bash
pkill -f "python3 -m http.server 8788"
```

## Features

- Randomized quiz sessions up to 60 questions.
- Question source selector for keeping copied quiz questions, generated lesson questions, and transcript quizzes separate.
- Category-aware question bank based on `Questions/` subfolder names.
- Single-answer and multi-answer questions.
- Final score and review screen.
- Per-category scoring after each attempt.
- Local attempt history and missed-question tracking in browser `localStorage`.
- Submit confirmation prompt to prevent accidental submissions.

## Notes

- The app is dependency-free and does not use a backend.
- Use Ubuntu WSL for parser and server commands because local Windows script execution is restricted.
- If questionnaire source files change, rerun the parser before testing.
- If `Transcripts/_ALL_QUIZZES.json` changes, rerun the parser before testing.
- Do not edit `data/questions.json` or `data/questions_review.md` by hand; regenerate them from source files.
- Missed questions and test history are stored only in the browser where the quiz is used.

## Adding Generated Lesson Questions

Copied quiz-export questions are tagged as the `Quiz Bank` module. Generated lesson questions can be added later as JSON files under `GeneratedQuestions/`; the builder will merge them into `data/questions.json` as a separate source module.

Example:

```json
{
  "questions": [
    {
      "module": "Training Lessons",
      "category": "Automation Foundations",
      "question": "What is the primary role of playbooks in Cortex?",
      "options": ["Creating dashboards", "Automating workflows", "Deleting content packs", "Managing licenses"],
      "correct_answers": ["Automating workflows"]
    }
  ]
}
```

## Adding Transcript Quizzes

Transcript quiz exports should be placed at:

```text
Transcripts/_ALL_QUIZZES.json
```

The builder expects either a list of question objects or an object with a `questions` list. Transcript options are converted from lettered option objects into the app's plain text option format, and correct answer letters are mapped to answer text.

After replacing or updating the transcript export, run:

```bash
cd /mnt/c/Users/dareyes/Work/CertTestingApp
python3 scripts/build_question_bank.py
```
