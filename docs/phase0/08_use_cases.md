# Use Cases

## Overview

This document defines the primary use cases supported by the Fraud Detection System. A use case describes how different users interact with the application to achieve specific objectives.

These use cases serve as the functional blueprint for frontend development, backend APIs, machine learning integration, testing, and user experience design.

---

# System Actors

The primary actor interacting with Version 1 of the application is:

- User (Fraud Analyst / Risk Analyst / ML Engineer / Recruiter Demo User)

The system itself consists of:

- Frontend Application
- Backend API
- Machine Learning Prediction Engine

---

# Use Case UC-01: Predict Transaction Fraud

## Objective

Allow users to determine whether a financial transaction is likely to be fraudulent.

### Primary Actor

User

### Preconditions

- Application is running.
- ML model has been loaded successfully.
- Backend API is available.

### Main Flow

1. User opens the Fraud Detection dashboard.
2. User enters transaction details.
3. User submits the prediction request.
4. Frontend validates required fields.
5. Backend validates incoming data.
6. Data preprocessing pipeline is executed.
7. Machine Learning model generates a prediction.
8. Prediction response is returned.
9. Dashboard displays:
   - Predicted class
   - Fraud probability
   - Confidence score
   - Prediction explanation

### Postconditions

- Fraud prediction is successfully displayed.
- User understands the prediction outcome.

---

# Use Case UC-02: View Prediction Explanation

## Objective

Help users understand why a prediction was generated.

### Primary Actor

User

### Main Flow

1. Prediction is completed.
2. System calculates explanation data.
3. Dashboard highlights influential features.
4. User reviews feature importance and confidence.

### Outcome

The prediction becomes transparent and interpretable.

---

# Use Case UC-03: Handle Invalid Input

## Objective

Prevent invalid transaction data from reaching the Machine Learning model.

### Primary Actor

User

### Main Flow

1. User enters invalid or incomplete data.
2. Validation rules execute.
3. Invalid fields are highlighted.
4. User receives descriptive validation messages.
5. Prediction request is blocked until corrections are made.

### Outcome

Only valid data reaches the prediction pipeline.

---

# Use Case UC-04: Backend Health Check

## Objective

Verify that backend services are available before prediction requests are processed.

### Primary Actor

Frontend Application

### Main Flow

1. Frontend requests health status.
2. Backend verifies:
   - API availability
   - Model availability
   - Application readiness
3. Status response is returned.

### Outcome

Frontend confirms the application is ready for predictions.

---

# Use Case UC-05: Load Machine Learning Model

## Objective

Prepare the prediction engine during application startup.

### Primary Actor

Backend Application

### Main Flow

1. Backend starts.
2. Model artifacts are loaded.
3. Preprocessing pipeline is initialized.
4. Readiness checks are performed.
5. Prediction service becomes available.

### Outcome

The system is ready to serve inference requests.

---

# Use Case UC-06: View Prediction Dashboard

## Objective

Present prediction results in a structured and user-friendly interface.

### Primary Actor

User

### Dashboard Components

- Prediction summary
- Fraud probability
- Confidence indicator
- Transaction overview
- Feature importance
- Prediction explanation
- Status indicators

### Outcome

Users can interpret prediction results efficiently.

---

# Use Case UC-07: View Model Performance

## Objective

Allow users to explore the performance of the trained Machine Learning model.

### Primary Actor

User

### Information Displayed

- Accuracy
- Precision
- Recall
- F1 Score
- ROC-AUC
- Confusion Matrix

### Outcome

Users gain confidence in the reliability of the deployed model.

---

# Use Case UC-08: Review Project Documentation

## Objective

Provide technical documentation for learning, maintenance, and evaluation.

### Primary Actor

ML Engineers, Recruiters, Students

### Documentation Includes

- Project overview
- Architecture
- ML workflow
- API documentation
- Deployment guide
- Development decisions

### Outcome

The repository remains easy to understand and extend.

---

# High-Level Workflow

```text
User
  │
  ▼
Frontend Dashboard
  │
  ▼
Input Validation
  │
  ▼
Backend API
  │
  ▼
Preprocessing Pipeline
  │
  ▼
Machine Learning Model
  │
  ▼
Prediction + Probability
  │
  ▼
Explainability Engine
  │
  ▼
Frontend Dashboard
```

---

# Use Case Summary

| Use Case ID | Description |
|--------------|-------------|
| UC-01 | Predict Transaction Fraud |
| UC-02 | View Prediction Explanation |
| UC-03 | Handle Invalid Input |
| UC-04 | Backend Health Check |
| UC-05 | Load Machine Learning Model |
| UC-06 | View Prediction Dashboard |
| UC-07 | View Model Performance |
| UC-08 | Review Project Documentation |

---

# Future Use Cases

The following use cases are outside the scope of Version 1 but may be considered in future releases:

- User authentication and authorization
- Transaction history management
- Bulk transaction prediction
- CSV file upload
- Real-time transaction monitoring
- Streaming fraud detection
- Model retraining interface
- Fraud investigation workspace
- Admin dashboard
- Notification and alert system

---

# Conclusion

These use cases define how users and system components interact throughout the Fraud Detection System. They provide a clear functional blueprint that will guide the implementation of the frontend, backend, machine learning pipeline, testing strategy, and overall application workflow.