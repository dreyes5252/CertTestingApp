# Cert Testing App Agent Notes

This folder contains a local Cortex XSIAM practice quiz app built from copied questionnaire exports, generated lesson questions, and transcript-derived quiz exports.

## Project Shape

- `Questions/` contains category folders such as `Automation`, `CaseManagement`, `PlatformManagement`, and `Querying`.
- `GeneratedQuestions/` can contain reviewed JSON questions generated from lesson material.
- `Transcripts/_ALL_QUIZZES.json` contains the combined transcript quiz export used for the `Transcript Quizzes` source module.
- `Transcripts/Cortex XSIAM training material/output/` contains structured lesson transcripts and review notes that may be used to generate future questions.
- `scripts/build_question_bank.py` parses questionnaire text files, generated lesson question JSON, and transcript quiz JSON.
- `data/questions.json` is generated data consumed by the browser app.
- `data/questions_review.md` is generated for manual review of parsed questions and answers.
- `app/` contains the static web UI.

## Question Source Modules

- `Quiz Bank` is for copied quiz-export questions from `Questions/`.
- `Training Lessons` is for reviewed questions generated from lesson material under `GeneratedQuestions/`.
- `Transcript Quizzes` is for converted questions from `Transcripts/_ALL_QUIZZES.json`.

The app's **Question Source** dropdown is driven by the generated `modules` list in `data/questions.json`. Add or modify source data through the builder rather than hand-editing the generated JSON.

## Working Rules

- Treat the questionnaire text files as source material. Do not edit them unless the user explicitly asks.
- Treat `Transcripts/_ALL_QUIZZES.json` as source material for transcript quiz imports.
- Regenerate `data/questions.json` after questionnaire, generated-question, or transcript-quiz changes.
- Preserve category names from `Questions/` subfolders so score reporting can show category performance.
- Keep copied quiz-export questions in the `Quiz Bank` module, generated lesson questions in `Training Lessons`, and transcript quiz imports in `Transcript Quizzes`.
- For transcript imports, use the transcript domain label as the app category when available.
- Keep the app static and dependency-free unless there is a clear reason to add a framework.
- Run project commands from Ubuntu WSL to avoid local Windows execution restrictions.
- Do not commit secrets, private notes, or unrelated workspace artifacts.
- Avoid committing incidental line-ending churn in source exports unless the content intentionally changed.

## Common Commands

For a fresh clone, run the app from inside Ubuntu WSL:

```bash
cd /path/to/CertTestingApp
python3 -m http.server 8788 --bind 127.0.0.1
```

Then open `http://localhost:8788/app/`.

Run project commands inside the Ubuntu WSL distro. From PowerShell:

```powershell
wsl -d Ubuntu -- bash -lc "cd /mnt/c/Users/dareyes/Work/CertTestingApp && python3 scripts/build_question_bank.py"
wsl -d Ubuntu -- bash -lc "cd /mnt/c/Users/dareyes/Work/CertTestingApp && python3 -m http.server 8788 --bind 127.0.0.1"
```

Then open `http://localhost:8788/app/`.

If already inside WSL:

```bash
cd /mnt/c/Users/dareyes/Work/CertTestingApp
python3 scripts/build_question_bank.py
python3 -m http.server 8788 --bind 127.0.0.1
```

Stop a detached server with:

```bash
pkill -f "python3 -m http.server 8788"
```
