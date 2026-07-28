# 3.1 Baseline Model

## 3.1.1 Load Processed Data

The processed training, validation, and testing datasets were loaded from the `data/processed` directory. Dataset dimensions and missing values were verified to ensure data integrity before preprocessing and baseline model development.

## 3.1.2 Fit Preprocessing Pipeline

The preprocessing pipeline was recreated and fitted exclusively on the training dataset. The fitted pipeline was then applied to the validation and testing datasets, ensuring consistent feature transformations while preventing data leakage. The transformed datasets were converted back to Pandas DataFrames to preserve feature names and improve interpretability during model development.

## 3.1.3 Train Baseline Logistic Regression

A Logistic Regression classifier was selected as the baseline model and trained using the preprocessed training dataset. Predictions and class probabilities were generated for the training, validation, and testing datasets. This baseline establishes a reference point against which more advanced machine learning models will be compared in later phases.

## 3.1.4 Baseline Performance

The baseline Logistic Regression model was evaluated using the validation dataset. Performance was measured using Accuracy, Precision, Recall, F1-Score, ROC-AUC, and PR-AUC. A confusion matrix and classification report were generated to establish a benchmark for subsequent experiments involving imbalance handling and advanced machine learning models.

## 3.1.5 Documentation Update

### Baseline Model

A baseline Logistic Regression model was developed to establish an initial performance benchmark for the fraud detection system.

### Workflow

1. Loaded the processed training, validation, and testing datasets.
2. Recreated and fitted the preprocessing pipeline using only the training dataset.
3. Applied identical preprocessing to the validation and testing datasets.
4. Trained a Logistic Regression classifier.
5. Generated predictions and class probabilities.
6. Evaluated model performance using the validation dataset.

### Evaluation Metrics

The baseline model was evaluated using:

- Accuracy
- Precision
- Recall
- F1-Score
- ROC-AUC
- PR-AUC (Average Precision)

A confusion matrix and classification report were also generated to provide a detailed assessment of classification performance.

### Outcome

The baseline model serves as the reference point for all future experiments involving imbalance handling, advanced machine learning models, hyperparameter tuning, and explainability.

## 3.2 Handling Imbalanced Data

### Why Class Imbalance Matters

Fraud detection is a highly imbalanced classification problem where fraudulent transactions occur much less frequently than legitimate ones. Standard machine learning algorithms tend to optimize overall accuracy, often ignoring the minority class.

### Techniques Evaluated

- Baseline Model
- Class Weight
- Random Oversampling
- Random Undersampling
- SMOTE

### Evaluation Metrics

Each sampling strategy was evaluated using:

- Accuracy
- Precision
- Recall
- F1-Score
- ROC-AUC
- PR-AUC

### Final Decision

After comparing all techniques, **SMOTE** was selected as the default sampling strategy because it provided the best overall balance between fraud detection capability and generalization.

### Key Learnings

- High Accuracy alone is not sufficient for fraud detection.
- Recall is one of the most important metrics because missing fraudulent transactions is expensive.
- Precision and Recall should always be interpreted together.
- PR-AUC is often more informative than ROC-AUC for highly imbalanced datasets.
- SMOTE generates synthetic minority samples instead of duplicating existing records, reducing the risk of overfitting compared to Random Oversampling.

### 3.2.1 Analyze Class Distribution

The training dataset was analyzed to understand the severity of class imbalance before applying any resampling techniques.

### Analysis Performed

- Loaded the target variable from the training dataset.
- Counted legitimate and fraudulent transactions.
- Calculated the percentage distribution of each class.
- Visualized the class distribution using bar and pie charts.
- Computed the fraud rate and imbalance ratio.
- Interpreted the impact of class imbalance on machine learning performance.

### Key Findings

- The dataset is severely imbalanced.
- Fraudulent transactions represent only a very small percentage of the training data.
- A model optimized solely for accuracy would likely favor the majority class and fail to detect many fraudulent transactions.
- Specialized imbalance-handling techniques are therefore required before developing production-ready fraud detection models.

### Next Steps

The following imbalance-handling strategies will be evaluated:

- Class Weighting
- Random Oversampling
- Random Undersampling
- SMOTE Oversampling

Each strategy will be compared using Precision, Recall, F1-Score, ROC-AUC, and PR-AUC before selecting the most suitable approach for the remainder of the project.

### 3.2.2 Baseline Without Resampling

Before applying any imbalance-handling techniques, the baseline Logistic Regression model was evaluated using the original imbalanced training dataset.

#### Objectives

- Review baseline performance metrics.
- Analyze prediction outcomes using the confusion matrix.
- Identify the limitations caused by class imbalance.
- Establish a benchmark for future comparison.

#### Evaluation Metrics

The baseline model was evaluated using:

- Accuracy
- Precision
- Recall
- F1-Score
- ROC-AUC
- PR-AUC
- Fraud Detection Rate
- Fraud Miss Rate
- False Alarm Rate

#### Key Observations

- Overall accuracy was high due to the overwhelming number of legitimate transactions.
- The confusion matrix revealed that some fraudulent transactions were still classified as legitimate.
- Fraud Miss Rate highlighted the cost of missed fraud.
- False Alarm Rate remained relatively low, indicating that few legitimate transactions were incorrectly flagged.

#### Benchmark Established

The baseline evaluation has been finalized and will serve as the reference point for all imbalance-handling strategies evaluated in the subsequent phases.

Future experiments will compare:

- Class Weighting
- Random Oversampling
- Random Undersampling
- SMOTE

using the same evaluation metrics to ensure a fair and consistent comparison.

### 3.2.3 Class Weight Strategy

The first imbalance-handling technique evaluated in this project was class weighting using Logistic Regression.

Instead of modifying the dataset through oversampling or undersampling, the learning algorithm automatically assigned higher importance to fraudulent transactions during training.

#### Objectives

- Train a weighted Logistic Regression model.
- Evaluate the model using the validation dataset.
- Compare the results with the baseline model.
- Assess whether class weighting improves fraud detection.

#### Evaluation Process

The weighted model was evaluated using the same metrics as the baseline:

- Accuracy
- Precision
- Recall
- F1-Score
- ROC-AUC
- PR-AUC
- Fraud Detection Rate
- Fraud Miss Rate
- False Alarm Rate

#### Key Findings

- The weighted model was trained without altering the original class distribution.
- Performance was compared directly against the baseline benchmark.
- Improvements and trade-offs were analyzed from both statistical and business perspectives.
- The weighted model now serves as the first imbalance-handling benchmark for subsequent experiments.

#### Next Steps

The following techniques will be evaluated using the identical workflow:

- Random Oversampling
- Random Undersampling
- SMOTE Oversampling

The best-performing strategy will be selected after comparing all evaluation metrics.

## 3.2.4 Random Oversampling

### Objective

Evaluate whether balancing the training dataset through Random Oversampling improves fraud detection performance compared to the Baseline and Class Weight approaches.

### Method

- Applied `RandomOverSampler` from the `imbalanced-learn` library.
- Balanced only the training dataset.
- Left validation and test datasets unchanged.
- Trained a Logistic Regression model using the oversampled data.
- Evaluated the model using the existing validation pipeline.

### Evaluation Metrics

The following metrics were recorded:

- Accuracy
- Precision
- Recall
- F1-Score
- ROC-AUC
- PR-AUC
- Fraud Detection Rate
- Fraud Miss Rate
- False Alarm Rate

### Observations

- Increased minority-class representation during training.
- Improved learning opportunities for fraudulent transactions.
- Performance compared directly with:
  - Baseline Logistic Regression
  - Class Weight Logistic Regression

### Outcome

The Random Oversampling experiment has been completed and documented. Its performance will be compared with Random Undersampling and SMOTE before selecting the final imbalance-handling strategy.

## 3.2.5 Random Undersampling

### Objective

Evaluate whether balancing the training dataset by reducing majority-class samples improves fraud detection performance.

### Method

- Applied `RandomUnderSampler` from the `imbalanced-learn` library.
- Balanced only the training dataset.
- Kept validation and test datasets unchanged.
- Trained a Logistic Regression model using the undersampled data.
- Evaluated the model using the existing validation pipeline.

### Evaluation Metrics

The following metrics were recorded:

- Accuracy
- Precision
- Recall
- F1-Score
- ROC-AUC
- PR-AUC
- Fraud Detection Rate
- Fraud Miss Rate
- False Alarm Rate

### Observations

- Reduced the number of legitimate transactions in the training data.
- Improved class balance without creating synthetic or duplicated samples.
- Compared directly with:
  - Baseline Logistic Regression
  - Class Weight Strategy
  - Random Oversampling

### Outcome

The Random Undersampling experiment has been completed. Its effectiveness will be compared with SMOTE before selecting the final imbalance-handling strategy.

## 3.2.6 SMOTE Oversampling

### Objective

Synthetic Minority Over-sampling Technique (SMOTE) was applied to improve the model's ability to identify fraudulent transactions without simply duplicating minority-class samples.

Unlike Random Oversampling, SMOTE creates synthetic fraud samples by interpolating between existing minority-class observations, allowing the classifier to learn a more generalized decision boundary.

---

### Workflow

1. Apply SMOTE only on the training dataset.
2. Keep validation and test datasets unchanged.
3. Train a Logistic Regression model using the SMOTE-balanced dataset.
4. Evaluate the model on the validation dataset.
5. Compare results with all previously implemented imbalance-handling techniques.

---

### Model Performance

| Metric | Value |
|---------|------:|
| Accuracy | 0.9747 |
| Precision | 0.0533 |
| Recall | 0.8333 |
| F1-Score | 0.1003 |
| ROC-AUC | 0.9370 |
| PR-AUC | 0.6480 |

---

### Business Metrics

| Metric | Value |
|---------|------:|
| Fraud Detection Rate | 0.8333 |
| Fraud Miss Rate | 0.1667 |
| False Alarm Rate | *(Generated from notebook)* |

---

### Observations

- SMOTE significantly increased Recall compared to the Baseline model.
- The number of missed fraud transactions decreased considerably.
- Precision remained relatively low because the model produced more false-positive predictions.
- ROC-AUC and PR-AUC remained competitive with the other resampling techniques.
- Compared with Random Oversampling, SMOTE produced similar fraud detection capability while learning from synthetic minority samples instead of duplicated observations.

---

### Conclusion

SMOTE proved to be one of the strongest imbalance-handling strategies evaluated during the Logistic Regression experiments. The higher Recall and Fraud Detection Rate make it a suitable preprocessing technique before training more advanced machine learning models such as Decision Trees, Random Forest, XGBoost, and LightGBM.

### 3.2.10 Exporting Final Datasets

After selecting the optimal sampling strategy, the finalized training and testing datasets are exported for reuse.

Benefits:

- Independent notebooks
- Reproducible experiments
- Consistent preprocessing
- Simplified model training pipeline
- Production-ready workflow

## XGBoost

The XGBoost classifier was selected as the third machine learning model for fraud detection due to its strong performance on structured tabular datasets.

The model uses gradient boosting to sequentially improve prediction accuracy by correcting the errors of previous trees. It is recognized for its scalability, robustness, and ability to model complex non-linear relationships.

The model training follows the same standardized evaluation pipeline established for the previous machine learning models to ensure a fair and consistent comparison.

### XGBoost Evaluation

The XGBoost model was evaluated using the same standardized metrics applied to the previous models: Accuracy, Precision, Recall, F1-Score, ROC-AUC, and PR-AUC.

This consistent evaluation methodology ensures an objective comparison across all machine learning models developed in the project.

### XGBoost ROC Analysis

The ROC Curve was generated to evaluate the ranking capability of the XGBoost model across all classification thresholds.

The ROC-AUC score provides an overall measure of the model's ability to distinguish fraudulent transactions from legitimate ones and will later be compared with other machine learning models.

### XGBoost Precision-Recall Analysis

The Precision-Recall Curve was generated to evaluate the XGBoost model's performance on the minority fraud class.

Since fraud detection is a highly imbalanced classification problem, the PR-AUC metric provides a more representative assessment of model effectiveness than Accuracy or ROC-AUC alone.

### XGBoost Feature Importance

Feature importance analysis was performed to identify the variables that contribute most to the XGBoost model's predictions.

The analysis highlights the relative influence of each feature and provides insights into the factors most associated with fraudulent transactions. These findings can guide future feature engineering and model refinement.

### XGBoost Summary

The XGBoost classifier was successfully trained and evaluated using the standardized model evaluation pipeline.

Its performance metrics were added to the centralized model comparison table alongside Logistic Regression and Random Forest, enabling an objective comparison across all trained models before selecting the final deployment model.

## LightGBM

LightGBM was selected as the fourth machine learning model for this project.

Its inclusion expands the model benchmarking process beyond Logistic Regression, Random Forest, and XGBoost, enabling a comprehensive comparison of modern algorithms commonly used for fraud detection on structured datasets.

### LightGBM Initialization

The LightGBM classifier was initialized using a standardized baseline configuration.

The same random seed and comparable model complexity settings were used to ensure a fair evaluation against Logistic Regression, Random Forest, and XGBoost.

### LightGBM Training

The LightGBM classifier was trained using the processed training dataset.

The resulting model is capable of predicting fraudulent and legitimate transactions and will be evaluated using the same standardized metrics and visualizations applied to the other machine learning models.

### LightGBM Predictions

The trained LightGBM model generated both class predictions and probability estimates for the unseen test dataset.

These outputs form the basis for evaluating the model using Accuracy, Precision, Recall, F1-Score, ROC-AUC, PR-AUC, and other visualization-based performance metrics.

### LightGBM Performance Evaluation

The LightGBM classifier was evaluated using the project's standardized evaluation pipeline.

Performance was measured using Accuracy, Precision, Recall, F1-Score, ROC-AUC, and PR-AUC to ensure an objective comparison with the other trained machine learning models.

### LightGBM Confusion Matrix

A confusion matrix was generated to visualize the classification outcomes of the LightGBM model.

The analysis focuses on identifying False Negatives and False Positives, providing deeper insight into the model's strengths and weaknesses beyond aggregate evaluation metrics.

## LightGBM

### ROC Analysis

The ROC Curve was generated to evaluate the ranking capability of the LightGBM model across all classification thresholds.

### Precision-Recall Analysis

The Precision-Recall Curve evaluated the model's performance on the minority fraud class and provided a more representative assessment for this imbalanced classification problem.

### Feature Importance

Feature importance analysis identified the variables that contributed most to the LightGBM model's predictions, improving interpretability and supporting future feature engineering.

### Model Comparison

The evaluation metrics of the LightGBM classifier were appended to the centralized model comparison table, completing the baseline benchmarking of all four machine learning models.

# 3.3.7 Documentation Update

The model development phase has been completed successfully.

This section documents the machine learning models implemented, the evaluation methodology, and the key findings obtained during baseline model comparison.

The documentation provides a clear record of the experiments performed before proceeding to model optimization.

## Baseline Models Implemented

The following baseline machine learning models were successfully developed and evaluated:

| Model | Purpose |
|--------|----------|
| Logistic Regression | Linear baseline classifier |
| Random Forest | Ensemble bagging classifier |
| XGBoost | Gradient boosting classifier |
| LightGBM | Efficient gradient boosting classifier |

## Standardized Training Pipeline

Every model followed the same development workflow:

1. Import required libraries
2. Initialize model
3. Train model
4. Generate predictions
5. Evaluate performance
6. Generate confusion matrix
7. Plot ROC Curve
8. Plot Precision-Recall Curve
9. Analyze feature importance (where applicable)
10. Save results for centralized comparison

Using an identical pipeline ensures that all models are evaluated fairly under the same experimental conditions.

## Evaluation Metrics

Each model was evaluated using the following metrics:

- Accuracy
- Precision
- Recall
- F1-Score
- ROC-AUC
- PR-AUC

Since fraud detection is a highly imbalanced binary classification problem, greater importance is given to Recall, PR-AUC, and F1-Score than Accuracy during model selection.

## Model Comparison

A centralized comparison table was created to benchmark all trained models.

The comparison enables objective evaluation based on identical metrics and forms the basis for selecting the final deployment model after hyperparameter tuning.

## Key Outcomes

The baseline experimentation phase established a strong benchmark for the project.

Key achievements include:

- Successful implementation of four machine learning classifiers.
- Consistent evaluation using standardized metrics.
- Visual performance analysis using Confusion Matrix, ROC Curve, and Precision-Recall Curve.
- Feature importance analysis for tree-based models.
- Creation of a centralized model comparison framework.

These outcomes provide a solid foundation for model optimization and deployment.

## Next Phase

The next phase focuses on Hyperparameter Tuning.

The objective is to optimize the strongest-performing baseline models, improve predictive performance, and identify the best production-ready classifier for fraud detection.

# Hyperparameter Tuning

The hyperparameter tuning phase has been initiated.

Three ensemble learning algorithms—Random Forest, XGBoost, and LightGBM—were selected for optimization based on their baseline performance and suitability for structured fraud detection tasks.

A standardized 5-fold stratified cross-validation strategy will be used throughout the tuning process.

Model-specific search spaces have been defined to support efficient hyperparameter optimization using Randomized Search and Grid Search.

## Hyperparameter Optimization

Randomized Search with 5-fold Stratified Cross Validation was used to optimize the three ensemble learning algorithms:

- Random Forest
- XGBoost
- LightGBM

The optimization process identified improved hyperparameter combinations while maintaining a consistent evaluation framework across all models.

The optimized classifiers will now be compared to determine the strongest production candidate.

## Best Model Selection

The tuned versions of Random Forest, XGBoost, and LightGBM were evaluated using the original test dataset.

Each model was assessed using the standardized evaluation pipeline and compared using Precision-Recall AUC, ROC-AUC, F1-Score, Precision, Recall, and Accuracy.

The strongest performing tuned model was selected as the production candidate for the remaining stages of the project.

# Phase 3.4: Hyperparameter Tuning

## Objective

Improve the performance of the baseline ensemble models by optimizing their hyperparameters using Randomized Search with Stratified Cross Validation.

---

## Hyperparameter Search Strategy

The following models were tuned:

- Random Forest
- XGBoost
- LightGBM

Randomized Search was selected over Grid Search due to its computational efficiency while maintaining strong search capability over large parameter spaces.

---

## Cross Validation

A 3-fold Stratified Cross Validation strategy was used during hyperparameter optimization.

This ensured that each validation fold preserved the original fraud-to-legitimate transaction ratio while reducing computational cost.

---

## Tuning Dataset

The complete training dataset contained approximately **453,000** transactions.

To reduce tuning time while maintaining representative class distribution, a **100,000-row stratified subset** was created exclusively for hyperparameter optimization.

After identifying the optimal hyperparameters, the selected model can be retrained using the complete training dataset.

---

## Evaluation

The tuned models were evaluated using the original unseen test dataset.

Evaluation metrics included:

- Accuracy
- Precision
- Recall
- F1-Score
- ROC-AUC
- PR-AUC

PR-AUC was treated as the primary comparison metric because fraud detection is an imbalanced classification problem.

---

## Outcome

Hyperparameter optimization produced tuned versions of:

- Random Forest
- XGBoost
- LightGBM

The best-performing tuned model was selected as the production candidate for the next phases of the project.

## 3.5.2 Confusion Matrix

Confusion matrices were generated for all tuned models to visualize classification outcomes.

Each matrix reports:

- True Positives (TP)
- True Negatives (TN)
- False Positives (FP)
- False Negatives (FN)

Special attention was given to False Negatives because missed fraud cases represent the highest business risk.

## 3.5.3 ROC Curve & AUC

ROC curves were generated for all tuned models.

The ROC-AUC score measures the model's ability to separate fraudulent and legitimate transactions across all classification thresholds.

Although ROC-AUC provides valuable insight into classifier discrimination, PR-AUC remains the primary ranking metric because of the severe class imbalance in fraud detection.

## 3.5.4 Precision-Recall Curve

Precision-Recall curves were generated for all tuned models.

Since fraudulent transactions represent only a small fraction of the dataset, the Precision-Recall Curve provides a more informative assessment than the ROC Curve.

The model with the highest PR-AUC is considered the strongest candidate for production deployment, subject to additional evaluation criteria.

## 3.5.5 Threshold Optimization

Probability thresholds ranging from **0.10 to 0.90** were evaluated.

For each threshold, the F1-Score was computed.

The threshold with the highest F1-Score was identified as the recommended operating threshold for deployment.

This approach provides greater flexibility than relying solely on the default threshold of 0.50.

## 3.5.6 Generalization Assessment

The tuned models were evaluated on an unseen test dataset after hyperparameter optimization.

Performance was assessed using multiple classification metrics, including Precision, Recall, F1-Score, ROC-AUC, and PR-AUC.

The consistent performance across these metrics indicates that the tuned models generalize well and are suitable candidates for production deployment.

The final production model will be selected primarily based on PR-AUC.

# Phase 3.5: Model Evaluation

## Objective

Evaluate the tuned machine learning models using multiple classification metrics and identify the most suitable production candidate.

---

## Evaluation Metrics

The tuned models were evaluated using:

- Accuracy
- Precision
- Recall
- F1-Score
- ROC-AUC
- PR-AUC

Since fraud detection is a highly imbalanced classification problem, **PR-AUC** was treated as the primary evaluation metric.

---

## Confusion Matrix

Confusion matrices were generated for each tuned model to analyze:

- True Positives
- True Negatives
- False Positives
- False Negatives

Special attention was given to False Negatives because undetected fraudulent transactions represent the highest business risk.

---

## ROC Curve

ROC curves were generated for all tuned models.

Although ROC-AUC measures the overall discriminative capability of a classifier, it can provide an overly optimistic assessment on imbalanced datasets.

Therefore, ROC-AUC was considered a secondary evaluation metric.

---

## Precision-Recall Curve

Precision-Recall curves were used as the primary visual comparison between tuned models.

The model achieving the highest PR-AUC was considered the strongest production candidate because it demonstrated the best balance between fraud detection capability and false alarm control.

---

## Threshold Optimization

Probability thresholds ranging from **0.10** to **0.90** were evaluated.

Rather than relying solely on the default threshold of **0.50**, the threshold producing the highest F1-Score was identified as the recommended operating point for deployment.

Future business requirements may further adjust this threshold to prioritize either higher recall or higher precision.

---

## Generalization Assessment

The tuned models were evaluated on a completely unseen test dataset after hyperparameter optimization.

The evaluation results indicate that the models generalize effectively and are suitable for production deployment.

---

## Outcome

The evaluation phase successfully compared all tuned models using multiple complementary metrics and visualizations.

The strongest production candidate has been identified and will be used in the subsequent phases of explainability, model serialization, API development, and deployment.

## 3.6.1 Feature Importance

The built-in feature importance scores of the selected production model were analyzed.

The top twenty most influential features were visualized to understand which variables contributed most to fraud prediction.

This serves as the first level of model explainability before applying model-agnostic techniques.

## 3.6.2 Permutation Importance

Permutation Importance was computed on the unseen test dataset using Average Precision (PR-AUC) as the evaluation metric.

The analysis identified the features whose random shuffling caused the largest reduction in model performance.

Comparing permutation importance with the model's built-in feature importance provided additional confidence in the robustness of the learned feature relationships.

## 3.6.3 SHAP Explainability

SHAP (SHapley Additive exPlanations) was applied to the selected production model to understand how individual features influence predictions.

A SHAP Summary Plot was generated to visualize both the magnitude and direction of each feature's contribution.

Unlike traditional feature importance methods, SHAP explains not only which features are important but also how they affect the predicted fraud probability.

## 3.6.4 Business Interpretation

The explainability results were translated into business-oriented insights.

The most influential features identified by Feature Importance, Permutation Importance, and SHAP were analyzed to understand their practical impact on fraud prediction.

These findings demonstrate how the model can support fraud analysts by prioritizing high-risk transactions while maintaining transparency in decision-making.

The explainability workflow increases confidence in the model and facilitates responsible deployment in real-world financial environments.

# Phase 3.6: Explainability

## Objective

Interpret the selected production model and understand how different input features influence fraud predictions.

---

## Feature Importance

The built-in feature importance scores of the selected tree-based model were analyzed.

The top contributing features were identified based on their overall influence during model training.

This provides an initial understanding of the variables driving model predictions.

---

## Permutation Importance

Permutation Importance was computed on the unseen test dataset using Average Precision (PR-AUC) as the evaluation metric.

Unlike built-in feature importance, this method measures the decrease in model performance after randomly shuffling individual features, providing a model-agnostic assessment of feature relevance.

---

## SHAP Explainability

SHAP (SHapley Additive exPlanations) was applied to explain individual feature contributions.

A SHAP Summary Plot was generated to visualize:

- Feature importance
- Direction of feature influence
- Distribution of feature effects across observations

SHAP offers a detailed explanation of the model's decision-making process and improves interpretability.

---

## Business Interpretation

The explainability analyses were translated into business-oriented insights.

The most influential features can assist fraud analysts in prioritizing suspicious transactions, improving investigation efficiency, and supporting transparent risk assessment.

The model functions as a decision-support system by highlighting high-risk transactions while maintaining explainability.

---

## Outcome

The explainability phase successfully combined Feature Importance, Permutation Importance, and SHAP to provide both technical and business-level interpretations of the selected production model.

These analyses improve trust, transparency, and readiness for deployment in real-world fraud detection systems.

## 3.7.1 Compare All Models

All baseline and tuned models were compared using a common evaluation framework.

Performance was assessed using Accuracy, Precision, Recall, F1-Score, ROC-AUC, and PR-AUC.

Since fraud detection is an imbalanced classification problem, PR-AUC was used as the primary metric for ranking the candidate models before production selection.

## 3.7.2 Select Production Model

The highest-performing tuned model was selected as the official production model.

Model selection was based primarily on PR-AUC while also considering Precision, Recall, F1-Score, and ROC-AUC.

This production model will be used for model serialization, inference, API development, and deployment throughout the remaining phases of the project.

## 3.7.3 Final Validation

The selected production model was successfully validated before deployment.

Validation confirmed that:

- The model generates predictions correctly.
- Probability estimates are available for fraud risk scoring.
- The model is ready for serialization and production inference.

The successful validation marks the completion of the machine learning development lifecycle.

# Phase 3.7: Model Selection

## Objective

Compare all trained models, select the best-performing production model, validate its readiness, and finalize the machine learning development phase.

---

## Compare All Models

All baseline and tuned models were evaluated using a common evaluation framework.

The following metrics were considered:

- Accuracy
- Precision
- Recall
- F1-Score
- ROC-AUC
- PR-AUC

Since fraud detection is a highly imbalanced binary classification problem, **PR-AUC** served as the primary ranking metric.

---

## Production Model Selection

The highest-ranked tuned model was selected as the official production model.

The selection considered both predictive performance and model robustness, with PR-AUC acting as the primary decision criterion.

This model will be used throughout the remaining stages of the project, including serialization, inference, API integration, and deployment.

---

## Final Validation

The production model was successfully validated prior to deployment.

Validation confirmed that:

- The selected model loads correctly.
- Predictions are generated successfully.
- Probability estimates are available for fraud risk scoring.
- The model is suitable for production inference.

---

## Outcome

The machine learning workflow has successfully progressed through:

- Data preparation
- Feature engineering
- Baseline model training
- Hyperparameter tuning
- Comprehensive evaluation
- Explainability
- Production model selection
- Final validation

The selected production model is now ready for serialization, deployment, and real-world inference.

## 3.8.1 Save Trained Model

The selected production model was serialized using Joblib and stored in the project's `artifacts` directory.

Saving the trained model enables reuse during inference without requiring retraining.

This serialized artifact will serve as the primary model file for deployment and API integration.

## 3.8.2 Save Preprocessing Pipeline

The preprocessing artifacts required for deployment were serialized and stored in the `artifacts` directory.

The saved artifacts include:

- Feature column names
- Preprocessing metadata
- Production model information

These artifacts ensure consistent preprocessing and feature alignment between the training and deployment environments.

## 3.8.3 Load & Verify Artifacts

All serialized artifacts were successfully loaded from the `artifacts` directory.

Verification confirmed:

- The trained production model loads correctly.
- Feature columns are restored successfully.
- Deployment metadata is available.
- The restored model generates valid predictions.

These checks ensure that the serialized artifacts are reliable for production deployment.

## 3.8.4 Version Artifacts

Artifact metadata was created to improve deployment traceability and reproducibility.

The stored version information includes:

- Project name
- Artifact version
- Selected production model
- Artifact creation timestamp
- Python runtime version

Maintaining artifact metadata simplifies future model updates, rollback procedures, and production maintenance.

# Phase 3.8: Model Serialization

## Objective

Prepare the selected production model and its supporting artifacts for deployment by serializing, validating, and versioning all required components.

---

## Save Trained Model

The selected production model was serialized using Joblib and stored in the project's `artifacts` directory.

This enables the trained model to be reused during inference without requiring retraining.

---

## Save Preprocessing Artifacts

The deployment preprocessing artifacts were serialized to preserve the feature schema expected by the production model.

The saved artifacts include:

- Feature column names
- Preprocessing metadata
- Production model information

These artifacts ensure consistency between training and deployment.

---

## Load & Verify Artifacts

All serialized artifacts were successfully restored from disk.

Verification confirmed that:

- The trained model loads correctly.
- Feature metadata is restored successfully.
- Serialized artifacts remain usable after loading.
- The restored model generates valid predictions.

---

## Artifact Versioning

Version metadata was created to improve reproducibility and deployment traceability.

The artifact version includes:

- Project name
- Artifact version
- Production model
- Serialization timestamp
- Python runtime version

This information simplifies future model updates, rollback procedures, and production maintenance.

---

## Outcome

The machine learning workflow now produces a complete deployment-ready artifact package.

All required components have been serialized, verified, and versioned, ensuring that the production model can be reliably integrated into inference pipelines, APIs, and deployment environments.