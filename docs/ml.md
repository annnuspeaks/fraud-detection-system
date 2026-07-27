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

## Random Oversampling

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

## Random Undersampling

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