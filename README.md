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

## Baseline Model

The first machine learning model developed in this project is a **Logistic Regression classifier**, which serves as the baseline for future model comparisons.

### Baseline Workflow

- Load processed datasets
- Fit the preprocessing pipeline on the training data
- Transform validation and testing datasets
- Train Logistic Regression
- Generate predictions and probabilities
- Evaluate using multiple classification metrics

### Evaluation Metrics

- Accuracy
- Precision
- Recall
- F1-Score
- ROC-AUC
- PR-AUC (Average Precision)

Future phases will compare advanced algorithms such as Random Forest, XGBoost, and LightGBM against this baseline.

## Handling Class Imbalance

Fraud detection is a highly imbalanced binary classification problem. Before applying advanced machine learning models, the dataset was analyzed to quantify the imbalance between legitimate and fraudulent transactions.

### Completed Analysis

- Target variable inspection
- Class distribution analysis
- Distribution visualization
- Fraud rate calculation
- Imbalance ratio calculation
- Interpretation of imbalance severity

### Why This Matters

A highly imbalanced dataset can produce misleadingly high accuracy while failing to detect fraudulent transactions. Therefore, this project emphasizes evaluation metrics such as Precision, Recall, F1-Score, ROC-AUC, and PR-AUC rather than relying solely on accuracy.

The next phase compares multiple imbalance-handling techniques to determine the most effective strategy for fraud detection.

## Baseline Model Benchmark

A baseline Logistic Regression model was trained using the original imbalanced dataset without applying any sampling strategy.

### Completed Analysis

- Reviewed baseline evaluation metrics.
- Analyzed the confusion matrix.
- Identified model weaknesses.
- Calculated fraud-oriented business metrics.
- Established a reusable benchmark for future experiments.

### Why This Step Is Important

The baseline benchmark provides a consistent reference for evaluating every imbalance-handling technique. Improvements introduced by Class Weighting, Random Oversampling, Random Undersampling, and SMOTE will be measured against this baseline using identical evaluation metrics.

This ensures that model selection is based on measurable performance improvements rather than isolated evaluation results.

## Class Weight Strategy

The first imbalance-handling experiment uses Logistic Regression with `class_weight="balanced"`.

### Completed Tasks

- Trained a weighted Logistic Regression model.
- Evaluated the model using the validation dataset.
- Compared the weighted model with the baseline.
- Analyzed improvements using both statistical and business-oriented metrics.

### Why This Matters

Unlike resampling techniques, class weighting preserves the original dataset while encouraging the model to pay greater attention to fraudulent transactions during optimization.

The remaining imbalance-handling strategies (Random Oversampling, Random Undersampling, and SMOTE) will be evaluated using the same workflow before selecting the final approach.

### Imbalanced Data Handling

Completed strategies:

- ✅ Baseline Logistic Regression
- ✅ Class Weight Strategy
- ✅ Random Oversampling

Upcoming strategies:

- Random Undersampling
- SMOTE Oversampling
- Final Strategy Comparison

### Imbalanced Data Handling

Completed strategies:

- ✅ Baseline Logistic Regression
- ✅ Class Weight Strategy
- ✅ Random Oversampling
- ✅ Random Undersampling

Upcoming strategies:

- SMOTE Oversampling
- Final Strategy Comparison
- Final Sampling Strategy Selection

