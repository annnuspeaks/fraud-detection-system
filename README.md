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

### SMOTE Oversampling

To improve the detection of fraudulent transactions, Synthetic Minority Over-sampling Technique (SMOTE) was applied to the training dataset.

Unlike Random Oversampling, which duplicates existing minority samples, SMOTE generates new synthetic fraud samples by interpolating between existing minority observations. This helps the model learn a more generalized decision boundary while reducing the risk of overfitting caused by duplicate samples.

#### Implementation

- Applied SMOTE only on the training dataset
- Validation and test datasets remained untouched
- Logistic Regression was retrained using the SMOTE-balanced dataset
- Model performance was evaluated using multiple classification metrics

#### Performance Summary

| Metric | Value |
|---------|------:|
| Accuracy | 0.9747 |
| Precision | 0.0533 |
| Recall | 0.8333 |
| F1-Score | 0.1003 |
| ROC-AUC | 0.9370 |
| PR-AUC | 0.6480 |

#### Business Interpretation

SMOTE substantially improved the fraud detection capability of the Logistic Regression model by increasing Recall from the baseline while reducing missed fraud cases.

Although Precision remained relatively low due to additional false positives, this trade-off is acceptable in fraud detection systems where identifying fraudulent transactions is generally more important than minimizing investigation effort.

This experiment establishes SMOTE as one of the strongest imbalance-handling strategies evaluated before moving to advanced machine learning models.

### Phase 3.2: Handling Imbalanced Data

Fraud detection datasets are naturally imbalanced, where fraudulent transactions represent only a small fraction of the total observations. Training machine learning models directly on such datasets often results in poor fraud detection despite high overall accuracy.

During this phase, multiple imbalance handling strategies were implemented and evaluated:

- Baseline (No Sampling)
- Class Weight
- Random Oversampling
- Random Undersampling
- SMOTE (Synthetic Minority Over-sampling Technique)

Each strategy was compared using the following evaluation metrics:

- Accuracy
- Precision
- Recall
- F1-Score
- ROC-AUC
- PR-AUC

Comparative analysis showed that **SMOTE** provided the best balance between fraud detection capability and overall model performance. Therefore, SMOTE was selected as the standard sampling strategy for all subsequent supervised machine learning models.

The finalized datasets (`X_train_final`, `y_train_final`, `X_test_final`, and `y_test_final`) were prepared for reuse in the upcoming modeling phases to ensure consistency and fair model comparison.

### Final Modeling Dataset

The finalized datasets generated after preprocessing and imbalance handling are exported to the `data/final/` directory.

These datasets are reused by all subsequent model training notebooks to ensure reproducibility and maintain a consistent preprocessing pipeline across the project.

Exported files:

- `X_train_final.csv`
- `y_train_final.csv`
- `X_test_final.csv`
- `y_test_final.csv`

### Logistic Regression

The Logistic Regression model was trained as the baseline classifier using the finalized SMOTE-balanced training dataset.

The model was evaluated using Accuracy, Precision, Recall, F1-Score, ROC-AUC, and PR-AUC. In addition to numerical metrics, Confusion Matrix, ROC Curve, Precision-Recall Curve, and coefficient analysis were performed to understand model behavior.

The evaluation results were stored in a centralized comparison table for benchmarking against subsequent machine learning models.

### Random Forest

The Random Forest classifier was trained using the finalized SMOTE-balanced training dataset.

The model was evaluated using Accuracy, Precision, Recall, F1-Score, ROC-AUC, and PR-AUC. Additional evaluation included the Confusion Matrix, ROC Curve, Precision-Recall Curve, and Feature Importance analysis.

The evaluation metrics were appended to the centralized model comparison table for benchmarking against other machine learning models.

## Backend Progress

### Phase 4

#### ✅ 4.1 FastAPI Setup

Completed

Features:

- FastAPI backend initialized
- Interactive Swagger documentation
- ReDoc documentation
- Root endpoint
- OpenAPI specification

## Backend API

The backend is built using FastAPI and exposes REST APIs for real-time fraud detection.

### Features

- FastAPI
- Swagger Documentation
- Prediction API
- Validation Layer
- Custom Error Handling
- Logging
- Health Check Endpoint

### Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /predict | Predict fraudulent transaction |
| GET | /health | API Health Status |

### Run Backend

```bash
cd backend
uvicorn app.main:app --reload
```

Swagger:

http://127.0.0.1:8000/docs

## Frontend

The frontend is built using React and Vite following a modular, scalable architecture.

Key technologies:

- React 19
- Vite
- Axios
- React Router DOM

The application follows a layered architecture separating pages, reusable components, services, and API communication.

### Batch CSV Fraud Prediction

- Upload CSV files for batch fraud analysis
- Real-time prediction summary
- Risk-level visualization
- Detailed prediction table
- Enterprise-ready frontend/backend integration

---

# Batch Prediction Validation & Robustness Testing

## Objective

Extensively validate the Batch Prediction pipeline against valid, invalid, malformed, and edge-case CSV files to ensure production-ready input validation and reliable error handling.

## Validation Scenarios Completed

### File Validation

- ✅ Valid CSV upload
- ✅ Invalid file type rejection (.txt, .xlsx, etc.)
- ✅ Empty CSV detection
- ✅ Header-only CSV detection

### Data Validation

- ✅ Missing values detection
- ✅ Invalid numeric values
- ✅ Mixed valid and invalid values
- ✅ Corrupted CSV parsing
- ✅ Corrupted quotation handling
- ✅ Wrong delimiter detection
- ✅ Scientific notation support
- ✅ Blank row handling

### Schema Validation

- ✅ Missing required column detection
- ✅ Multiple missing columns detection
- ✅ Duplicate column detection
- ✅ Duplicate header validation

### Performance & Limits

- ✅ 1,000-row dataset
- ✅ 10,000-row dataset
- ✅ 50,000-row dataset
- ✅ 100,000-row dataset
- ✅ Maximum row limit validation

### User Experience Validation

- ✅ Upload button enable/disable logic
- ✅ Validation messages displayed correctly
- ✅ HTTP 400 responses handled gracefully
- ✅ Backend validation errors surfaced to the UI

## Improvements Made

- Added duplicate header validation.
- Improved required-column validation.
- Added maximum row limit enforcement.
- Added maximum file-size validation.
- Improved CSV parsing robustness.
- Improved frontend validation feedback.
- Added comprehensive malformed CSV handling.

## Result

The Batch Prediction module has been validated against a wide range of realistic and edge-case scenarios and is considered production-ready for CSV input validation.

## ✅ Loading & Error States

The Prediction module has been enhanced with enterprise-grade loading, retry, notification, and error handling capabilities.

### Features Implemented

- Animated loading state during prediction
- Duplicate request prevention
- Floating toast notification system
- Success & failure feedback
- Retry prediction without re-uploading CSV
- Network failure handling
- Backend failure handling
- Global exception handling
- Safe HTTP 500 responses
- ML artifact protection
- User-friendly validation messages

### Error Handling Covered

- Missing required columns
- Duplicate columns
- Invalid delimiter
- Invalid file format
- Corrupted CSV
- Empty CSV
- Blank rows
- Missing values
- Infinite values
- Scientific notation support
- Large file validation
- Large dataset validation
- Network disconnect
- Backend unavailable
- HTTP 400 / 404 / 500
- Request timeout
- Retry workflow

### Architecture Improvements

- Centralized error handling
- Global backend exception handler
- Improved logging
- Retry-enabled frontend
- Toast-driven user feedback
- Production-ready loading workflow