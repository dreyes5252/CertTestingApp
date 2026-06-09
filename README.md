# XSIAM Practice Quiz

Static practice quiz app built from questionnaire text files in `Questions/` category folders.

## Build the Question Bank

Run commands inside the Ubuntu WSL distro. From PowerShell:

```powershell
wsl -d Ubuntu -- bash -lc "cd /mnt/c/Users/dareyes/Work/XSIAM-Questions && python3 scripts/build_question_bank.py"
```

If already inside WSL:

```bash
cd /mnt/c/Users/dareyes/Work/XSIAM-Questions
python3 scripts/build_question_bank.py
```

The script writes:

- `data/questions.json`
- `data/questions_review.md`

Review `data/questions_review.md` after adding or changing questionnaire files.

## Run the App

From PowerShell:

```powershell
wsl -d Ubuntu -- bash -lc "cd /mnt/c/Users/dareyes/Work/XSIAM-Questions && python3 -m http.server 8787"
```

If already inside WSL:

```bash
cd /mnt/c/Users/dareyes/Work/XSIAM-Questions
python3 -m http.server 8787
```

Open:

```text
http://localhost:8787/app/
```

## Features

- Randomized quiz sessions up to 60 questions.
- Question source selector for keeping copied quiz questions separate from generated lesson questions.
- Category-aware question bank based on `Questions/` subfolder names.
- Single-answer and multi-answer questions.
- Final score and review screen.
- Per-category scoring after each attempt.
- Local attempt history and missed-question tracking in browser `localStorage`.

## Notes

- The app is dependency-free and does not use a backend.
- Use Ubuntu WSL for parser and server commands because local Windows script execution is restricted.
- If questionnaire source files change, rerun the parser before testing.
- Missed questions and test history are stored only in the browser where the quiz is used.

## Generated Lesson Questions

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
