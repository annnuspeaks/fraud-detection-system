# Fraud Detection System

An end-to-end Machine Learning project for detecting fraudulent financial transactions using modern data science, machine learning, and MLOps practices.

---

## Project Overview

This project aims to build a production-ready fraud detection system capable of identifying suspicious financial transactions in real time. The project covers the complete machine learning lifecycle, including data engineering, exploratory data analysis, feature engineering, model development, evaluation, deployment, monitoring, and a modern web interface.

---

## Objectives

- Detect fraudulent transactions with high accuracy.
- Minimize false positives while maintaining strong recall.
- Build a scalable ML pipeline.
- Develop REST APIs using FastAPI.
- Build an interactive React dashboard.
- Deploy the complete application using modern DevOps practices.

---

## Tech Stack

### Machine Learning

- Python
- Scikit-learn
- XGBoost
- Pandas
- NumPy

### Backend

- FastAPI
- Uvicorn

### Frontend

- React
- Vite
- Axios

### Database

- SQLite (Development)

### Tools

- Git
- GitHub
- Jupyter Notebook
- VS Code

---

## Project Structure

```text
fraud-detection-system/
│
├── backend/
├── frontend/
├── src/
├── notebooks/
├── data/
├── models/
├── docs/
├── tests/
├── requirements.txt
└── README.md
```

---

## Current Progress

- [x] Phase 0 — Project Planning
- [x] Phase 1 — Project Initialization
- [ ] Phase 2 — Data Engineering
- [ ] Phase 3 — Machine Learning
- [ ] Phase 4 — Backend Development
- [ ] Phase 5 — Frontend Development
- [ ] Phase 6 — Integration
- [ ] Phase 7 — Deployment
- [ ] Phase 8 — Portfolio Enhancement
- [ ] Phase 9 — Project Completion

---

## License

This project is developed for educational and portfolio purposes.

## Data Versioning

This project uses **Data Version Control (DVC)** to manage machine learning datasets.

### Tracked Data

- Raw credit card transaction dataset
- Processed training dataset
- Processed validation dataset
- Processed testing dataset

### Why DVC?

- Keeps large datasets out of Git history.
- Enables reproducible experiments.
- Tracks dataset versions alongside source code.
- Supports scalable MLOps workflows.

### Initialize DVC

```bash
dvc init
```

### Pull Data

```bash
dvc pull
```

### Check Status

```bash
dvc status
```