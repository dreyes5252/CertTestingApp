# XSIAM Questions Agent Notes

This folder contains a local Cortex XSIAM practice quiz app built from the questionnaire text files in `Questions/`.

## Project Shape

- `Questions/` contains category folders such as `Automation`, `CaseManagement`, `PlatformManagement`, and `Querying`.
- `GeneratedQuestions/` can contain reviewed JSON questions generated from lesson material.
- `scripts/build_question_bank.py` parses the questionnaire text files.
- `data/questions.json` is generated data consumed by the browser app.
- `data/questions_review.md` is generated for manual review of parsed questions and answers.
- `app/` contains the static web UI.

## Working Rules

- Treat the questionnaire text files as source material. Do not edit them unless the user explicitly asks.
- Regenerate `data/questions.json` after questionnaire changes.
- Preserve category names from `Questions/` subfolders so score reporting can show category performance.
- Keep copied quiz-export questions in the `Quiz Bank` module and generated lesson questions in a separate module such as `Training Lessons`.
- Keep the app static and dependency-free unless there is a clear reason to add a framework.
- Do not commit secrets, private notes, or unrelated workspace artifacts.

## Common Commands

Run project commands inside the Ubuntu WSL distro. From PowerShell:

```powershell
wsl -d Ubuntu -- bash -lc "cd /mnt/c/Users/dareyes/Work/XSIAM-Questions && python3 scripts/build_question_bank.py"
wsl -d Ubuntu -- bash -lc "cd /mnt/c/Users/dareyes/Work/XSIAM-Questions && python3 -m http.server 8787"
```

Then open `http://localhost:8787/app/`.

If already inside WSL:

```bash
cd /mnt/c/Users/dareyes/Work/XSIAM-Questions
python3 scripts/build_question_bank.py
python3 -m http.server 8787
```
