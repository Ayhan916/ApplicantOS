# ApplicantOS API

FastAPI service for ApplicantOS platform APIs.

## Local development

```bash
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
uvicorn app.main:app --reload
```
