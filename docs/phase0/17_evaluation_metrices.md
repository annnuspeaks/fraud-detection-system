# Evaluation Metrics

## Overview

Model evaluation is one of the most critical stages of the Machine Learning lifecycle. Choosing inappropriate evaluation metrics can lead to selecting a model that appears accurate but performs poorly in real-world fraud detection.

Since fraudulent transactions represent only a small percentage of all transactions, overall accuracy alone is not an appropriate performance measure.

This document defines the standardized evaluation framework that will be used throughout the Fraud Detection System.

Every candidate model will be evaluated using the same metrics, ensuring fair, objective, and reproducible comparisons.

---

# Objectives

The evaluation framework aims to:

- Measure model performance objectively
- Compare multiple models fairly
- Detect overfitting
- Evaluate fraud detection capability
- Support business-oriented decision making
- Select the most reliable production model

---

# Why Accuracy Is Not Enough

Fraud detection is an **imbalanced classification problem**.

Example:

Suppose a dataset contains:

- Legitimate Transactions: 99,800
- Fraudulent Transactions: 200

A model that predicts every transaction as legitimate would achieve:

```
Accuracy = 99.8%
```

Despite the impressive accuracy, the model would detect:

```
Fraud Found = 0
```

Such a model would be unusable in practice.

Therefore, additional metrics must be considered.

---

# Confusion Matrix

Every classification model will first be analyzed using the Confusion Matrix.

```text
                     Actual

                 Legitimate   Fraud

Predicted Legit      TN         FN

Predicted Fraud      FP         TP
```

Where:

- TP → True Positives
- TN → True Negatives
- FP → False Positives
- FN → False Negatives

The confusion matrix forms the foundation for all other evaluation metrics.

---

# Accuracy

Definition:

The percentage of correctly classified observations.

Formula:

```
Accuracy =
(TP + TN)
/ (TP + TN + FP + FN)
```

Advantages:

- Easy to understand
- Useful for balanced datasets

Limitations:

- Misleading for highly imbalanced fraud datasets

Accuracy will be reported but **will not be used as the primary model selection criterion**.

---

# Precision

Definition:

Among all transactions predicted as fraud, how many were actually fraudulent?

Formula:

```
Precision =
TP / (TP + FP)
```

High Precision means:

- Fewer false fraud alerts
- Lower operational cost
- Better analyst efficiency

---

# Recall

Definition:

Among all actual fraudulent transactions, how many were correctly detected?

Formula:

```
Recall =
TP / (TP + FN)
```

Recall is one of the most important metrics in fraud detection.

A high Recall reduces the number of fraudulent transactions that go undetected.

---

# F1-Score

Definition:

The harmonic mean of Precision and Recall.

Formula:

```
F1 =
2 × Precision × Recall
-----------------------
 Precision + Recall
```

Advantages:

- Balances Precision and Recall
- Useful for imbalanced datasets
- Resistant to misleading accuracy values

F1-Score will be one of the primary comparison metrics.

---

# ROC Curve

The Receiver Operating Characteristic (ROC) Curve measures the trade-off between:

- True Positive Rate
- False Positive Rate

A stronger model produces a curve closer to the upper-left corner.

---

# ROC-AUC

Area Under the ROC Curve summarizes overall discrimination capability.

Interpretation:

| ROC-AUC | Interpretation |
|----------|---------------|
| 0.50 | Random Guess |
| 0.60–0.70 | Weak |
| 0.70–0.80 | Acceptable |
| 0.80–0.90 | Strong |
| >0.90 | Excellent |

ROC-AUC enables algorithm comparison independent of a single decision threshold.

---

# Precision–Recall Curve

For highly imbalanced datasets, the Precision–Recall (PR) Curve often provides a more informative view than the ROC Curve.

It illustrates the trade-off between:

- Precision
- Recall

This helps determine an operating threshold appropriate for fraud detection.

---

# PR-AUC

Area Under the Precision–Recall Curve summarizes model performance on the minority class.

For fraud detection, PR-AUC is considered one of the most informative metrics because it focuses on detecting fraudulent transactions rather than overall classification accuracy.

---

# Probability Calibration

The selected model should generate meaningful probability estimates.

Example:

```
Fraud Probability = 0.93
```

This probability enables:

- Confidence scoring
- Threshold tuning
- Risk categorization
- Better explainability

---

# Threshold Optimization

Binary classification typically uses:

```
Threshold = 0.50
```

However, fraud detection often benefits from threshold optimization.

Different thresholds influence:

- Precision
- Recall
- False Positive Rate
- False Negative Rate

The optimal threshold will be selected based on experimental results.

---

# Cross-Validation Metrics

Each candidate model will also report:

- Mean Cross-Validation Score
- Standard Deviation
- Fold-wise Performance

This provides a more reliable estimate of generalization performance.

---

# Model Comparison Dashboard

Every candidate model will be compared using a common evaluation table.

Example metrics include:

- Accuracy
- Precision
- Recall
- F1-Score
- ROC-AUC
- PR-AUC
- Cross-Validation Score
- Training Time
- Prediction Time

This standardized comparison supports objective model selection.

---

# Production Model Selection Criteria

The final production model will be selected using a balanced evaluation strategy.

Priority order:

1. Recall
2. F1-Score
3. PR-AUC
4. ROC-AUC
5. Precision
6. Inference Speed
7. Model Simplicity

Overall Accuracy will be treated as a supporting metric rather than the deciding factor.

---

# Reporting Standards

Every experiment should produce:

- Confusion Matrix
- Classification Report
- ROC Curve
- Precision–Recall Curve
- Feature Importance (where applicable)
- Model Comparison Table

This ensures transparency and reproducibility.

---

# Future Evaluation Enhancements

Future versions may include:

- Cost-sensitive evaluation
- Expected financial loss estimation
- Calibration curves
- Lift charts
- Gain charts
- Drift monitoring
- Fairness evaluation

Version 1 focuses on widely accepted supervised classification metrics.

---

# Evaluation Summary

| Category | Decision |
|----------|----------|
| Primary Goal | Detect Fraud Reliably |
| Accuracy | Supporting Metric Only |
| Precision | Required |
| Recall | Highest Priority |
| F1-Score | Primary Comparison Metric |
| ROC-AUC | Required |
| PR-AUC | Required |
| Cross Validation | Stratified K-Fold |
| Threshold Optimization | Supported |
| Model Selection | Multi-Metric Evaluation |

---

# Final Decision

The Fraud Detection System will adopt a comprehensive evaluation framework specifically designed for imbalanced classification problems. Model selection will prioritize Recall, F1-Score, and PR-AUC over overall Accuracy, ensuring that the chosen production model effectively detects fraudulent transactions while maintaining reliable, reproducible, and explainable performance.