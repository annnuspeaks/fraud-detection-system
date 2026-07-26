# Model Selection Discussion

## Overview

Selecting the appropriate Machine Learning model is one of the most critical decisions in the Fraud Detection System. The goal is not simply to maximize predictive performance, but to choose a model that balances accuracy, precision, recall, interpretability, inference speed, and deployment practicality.

Rather than assuming a single algorithm is the best choice, multiple candidate models will be evaluated using the same preprocessing pipeline, dataset split, and evaluation methodology.

The final production model will be selected based on objective experimental results.

---

# Objectives

The model selection process aims to:

- Establish a reliable baseline
- Compare multiple algorithms fairly
- Select the most robust model
- Minimize overfitting
- Maintain deployment efficiency
- Support explainability
- Ensure reproducible experiments

---

# Learning Problem

The Fraud Detection System addresses a:

**Supervised Binary Classification Problem**

Target Variable:

```
Class

0 → Legitimate Transaction
1 → Fraudulent Transaction
```

The selected model must predict both:

- Fraud class
- Fraud probability

Probability estimates are required for confidence scoring and explainability.

---

# Candidate Models

The following algorithms will participate in the model comparison process.

| Model | Purpose |
|---------|---------|
| Logistic Regression | Baseline Linear Model |
| Decision Tree | Simple Non-linear Baseline |
| Random Forest | Ensemble Learning |
| Gradient Boosting | Strong Ensemble Baseline |
| XGBoost | High-performance Gradient Boosting |
| LightGBM *(Optional)* | Fast Gradient Boosting |

Each model will be trained and evaluated independently.

---

# Baseline Model

The project will begin with:

**Logistic Regression**

Reasons:

- Fast training
- Highly interpretable
- Strong baseline
- Low computational cost
- Easy comparison against advanced models

Every advanced model must outperform the baseline to justify increased complexity.

---

# Model Comparison Strategy

Every algorithm must be evaluated under identical conditions.

The following will remain constant:

- Dataset
- Train/Test split
- Random seed
- Feature engineering pipeline
- Validation methodology
- Evaluation metrics

Only the learning algorithm itself should differ.

This ensures a fair and unbiased comparison.

---

# Hyperparameter Tuning Strategy

After establishing baseline performance, selected algorithms will undergo hyperparameter optimization.

Candidate techniques include:

- Grid Search
- Random Search

Version 1 will prioritize **Random Search** for its balance between performance and computational efficiency.

Each tuned model will be evaluated against its untuned counterpart.

---

# Handling Class Imbalance

Fraud detection datasets contain a very small minority class.

Each candidate model will be evaluated using one or more imbalance-handling techniques, such as:

- Class weighting
- Balanced class parameters
- SMOTE (if beneficial)
- Threshold optimization

The selected strategy must improve fraud detection without introducing excessive false positives.

---

# Cross-Validation Strategy

To reduce dependence on a single train/test split, cross-validation will be performed.

Recommended approach:

- Stratified K-Fold Cross Validation

Benefits include:

- Preserving class distribution
- More reliable performance estimation
- Better generalization assessment

---

# Model Evaluation Process

Each candidate model will follow the same workflow.

```text
Preprocessed Dataset
        │
        ▼
Train Model
        │
        ▼
Cross Validation
        │
        ▼
Prediction
        │
        ▼
Performance Evaluation
        │
        ▼
Model Comparison
        │
        ▼
Best Model Selection
```

This workflow ensures consistency across experiments.

---

# Model Selection Criteria

The production model will be selected using multiple factors.

Primary considerations include:

- Fraud detection capability
- Generalization performance
- Probability calibration
- Inference speed
- Stability
- Explainability
- Computational efficiency

Selection will never depend on a single metric.

---

# Model Complexity

Preference will be given to the simplest model that satisfies performance requirements.

Increasing model complexity should provide measurable improvements.

Unnecessary complexity will be avoided.

---

# Explainability Considerations

The selected model should support meaningful prediction explanations.

Desired characteristics:

- Feature importance
- Confidence interpretation
- Local prediction explanation
- Business-friendly interpretation

If multiple models perform similarly, the more explainable model may be preferred.

---

# Model Serialization

After selection, the production model will be serialized.

Artifacts include:

- Trained model
- Preprocessing pipeline
- Configuration metadata
- Model version information

These artifacts will be loaded by the backend inference service.

---

# Experiment Documentation

Each experiment should record:

- Algorithm
- Hyperparameters
- Dataset version
- Random seed
- Evaluation metrics
- Cross-validation results
- Timestamp

This enables transparent comparison and reproducibility.

---

# Future Model Improvements

Future project versions may evaluate:

- CatBoost
- Deep Neural Networks
- Ensemble Voting
- Stacking
- AutoML
- Cost-sensitive learning
- Online learning approaches

Version 1 focuses on classical supervised machine learning methods.

---

# Model Selection Summary

| Category | Decision |
|----------|----------|
| Problem Type | Supervised Binary Classification |
| Baseline Model | Logistic Regression |
| Candidate Models | Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, XGBoost, LightGBM (Optional) |
| Comparison Strategy | Standardized Pipeline |
| Hyperparameter Tuning | Random Search |
| Cross Validation | Stratified K-Fold |
| Class Imbalance | Dedicated Handling Strategy |
| Selection Basis | Multi-Criteria Evaluation |
| Deployment Artifact | Best Serialized Model |

---

# Final Decision

The Fraud Detection System will adopt a structured, evidence-based model selection process rather than relying on assumptions about algorithm performance. A baseline model will first establish reference performance, after which multiple candidate algorithms will be evaluated using identical preprocessing, validation, and evaluation procedures. The final production model will be selected based on overall robustness, fraud detection capability, explainability, and deployment suitability.