# Phase 2 — Data Engineering

# 2.1 Dataset Collection

## Dataset

**Name:** Credit Card Fraud Detection Dataset

## Source

Kaggle

## Domain

Financial Fraud Detection

## Problem Type

Binary Classification

## Target Variable

Class

- 0 → Legitimate Transaction
- 1 → Fraudulent Transaction

## Dataset Summary

- Transactions made by European cardholders
- Highly imbalanced dataset
- PCA-transformed features (V1–V28)
- Suitable for fraud detection research and production ML workflows

## Storage Location

data/raw/creditcard.csv

## Data Dictionary

| Feature | Description |
|----------|-------------|
| Time | Seconds elapsed since the first transaction |
| V1–V28 | PCA-transformed anonymized numerical features |
| Amount | Transaction amount |
| Class | Target variable (0 = Legitimate, 1 = Fraud) |

### Dataset Statistics

- Total Features: 30
- Input Features: 30 (Time, V1–V28, Amount)
- Target Feature: Class
- Total Columns: 31

## Dataset Source

**Platform:** Kaggle

**Dataset Name:** Credit Card Fraud Detection

**Original Data Contributors:**
Machine Learning Group (Université Libre de Bruxelles) in collaboration with Worldline.

## License

The dataset is publicly available on Kaggle for research and educational purposes. It is used exclusively for learning, experimentation, and portfolio development.

## Citation

Andrea Dal Pozzolo, Olivier Caelen, Reid A. Johnson, and Gianluca Bontempi.

"Calibrating Probability with Undersampling for Unbalanced Classification."

IEEE Symposium Series on Computational Intelligence (SSCI), 2015.

## Dataset Storage

### File Location

```text
data/raw/creditcard.csv
```

### Verification

- Dataset successfully downloaded
- Stored in the project's raw data directory
- Successfully loaded using Pandas
- Ready for validation and preprocessing

---

# 2.2 Dataset Validation

## 2.2.1 File Validation

The raw dataset was successfully validated by confirming its availability, loading it using Pandas, and verifying that the number of rows and columns matched the expected dataset structure.

## 2.2.2 Schema Validation

The dataset schema was validated by comparing the actual column names with the expected schema. Column information and data types were also reviewed to ensure compatibility with the preprocessing pipeline.

## 2.2.3 Missing Values Analysis

The dataset was inspected for missing values across all features. No missing values were found, confirming that the dataset is complete and does not require missing value imputation before preprocessing.

## 2.2.4 Duplicate Records Analysis

The dataset was analyzed for duplicate records to assess data quality. Duplicate transactions were identified and documented for removal during the data cleaning phase. No modifications were made at this stage.

## 2.2.5 Data Types Validation

The data types of all features were validated to ensure compatibility with the preprocessing pipeline. All columns were confirmed to contain numeric values, making the dataset ready for feature engineering and model development.

## 2.2.6 Target Variable Validation

The target variable was validated by confirming the presence of the expected binary classes (0 for legitimate transactions and 1 for fraudulent transactions). The class distribution revealed a significant imbalance, which is characteristic of fraud detection datasets and will be addressed during model development.

---

# 2.3 Data Cleaning

## 2.3.1 Remove Duplicates

Duplicate transactions identified during the validation phase were removed while preserving the first occurrence of each record. The cleaned dataset now contains only unique transactions and is ready for further cleaning steps.

## 2.3.2 Handle Missing Values

The cleaned dataset was re-evaluated for missing values after duplicate removal. No missing values were found, confirming that no imputation or additional preprocessing was required.

## 2.3.3 Handle Invalid Values

The cleaned dataset was validated for invalid values, including infinite values, negative transaction amounts, and unexpected target labels. No invalid values were detected, confirming the dataset is suitable for subsequent preprocessing and feature engineering.

## 2.3.4 Outlier Analysis

An outlier analysis was performed on the transaction amount feature using the Interquartile Range (IQR) method. Potential outliers were identified and reviewed; however, no records were removed because extreme transaction values may represent genuine fraudulent behavior and are therefore valuable for model training.

## 2.3.5 Data Consistency Checks

A final quality assurance review was performed on the cleaned dataset. Dataset dimensions, feature uniqueness, duplicate records, missing values, and constant features were verified. The dataset passed all consistency checks and was confirmed to be ready for exploratory data analysis.

---

# 2.4 Exploratory Data Analysis

## 2.4.1 Dataset Overview

A high-level exploration of the cleaned dataset was performed by reviewing its dimensions, structure, feature types, descriptive statistics, and sample records. This established a foundational understanding of the dataset before conducting detailed exploratory analysis.

## 2.4.2 Univariate Analysis

Individual feature distributions were examined using descriptive statistics and visualizations. Transaction amount, transaction time, and target class distributions were analyzed, while the PCA-transformed features were summarized statistically. The analysis confirmed a highly imbalanced target variable and a right-skewed distribution of transaction amounts.

## 2.4.3 Bivariate Analysis

Relationships between key features and the target variable were explored using box plots and mean comparisons. Transaction amount, transaction time, and PCA-transformed features were analyzed across legitimate and fraudulent transactions. Several PCA features displayed noticeable differences between the two classes, indicating their potential importance for fraud detection models.

## 2.4.4 Correlation Analysis

Pearson correlation analysis was performed to examine relationships among numerical features. A correlation heatmap provided a visual overview of feature dependencies, while correlations with the target variable highlighted features that may contribute significantly to fraud detection. As expected, the PCA-transformed features exhibited relatively low pairwise correlations.

## 2.4.5 Target Distribution

The target variable was analyzed to quantify the class imbalance in the dataset. Legitimate transactions significantly outnumber fraudulent transactions, confirming that fraud detection is a highly imbalanced binary classification problem. This insight will guide the selection of evaluation metrics and class balancing strategies during model development.

## 2.4.6 Business Insights

The exploratory data analysis was translated into business-oriented insights, highlighting the rarity of fraudulent transactions, the impact of severe class imbalance, the importance of high-value transactions, and the need for machine learning models capable of identifying complex fraud patterns. These findings provide practical guidance for designing an effective fraud detection system.

---

# 2.5 Feature Engineering

## 2.5.1 Feature Selection

The target variable (`Class`) was separated from the input features to create the feature matrix and target vector. All numerical features were retained because they may contribute valuable information for fraud detection, particularly the PCA-transformed components that capture underlying transaction patterns.

## 2.5.2 Feature Creation

Three additional features were engineered from the original transaction attributes: `TransactionHour`, `LogAmount`, and `HighValueTransaction`. These features improve interpretability, reduce the impact of skewed transaction amounts, and capture high-risk transaction characteristics without altering the original data.

## 2.5.3 Encoding Strategy

The feature set was inspected for categorical variables to determine whether encoding was required. Since all features were already numerical, no encoding techniques were applied. The dataset is therefore ready for feature scaling and subsequent preprocessing.

## 2.5.4 Scaling Strategy

The continuous features requiring scaling were identified and documented. The actual scaling process will be performed within the preprocessing pipeline during the preprocessing phase to prevent data leakage and ensure consistent transformations across training, validation, testing, and inference.

## 2.5.5 Feature Importance Review

A preliminary feature importance assessment was conducted using Pearson correlation with the target variable. This review identified features with stronger statistical relationships to fraudulent transactions and provided an initial understanding of feature relevance. Final feature importance analysis will be performed after model training using model-based interpretation techniques.

---

# 2.6 Data Preprocessing

## 2.6.1 Build Preprocessing Pipeline

A reusable Scikit-learn preprocessing pipeline was constructed using a `ColumnTransformer` and `Pipeline`. The pipeline standardizes continuous numerical features while passing all remaining features through unchanged. To prevent data leakage, the pipeline was created but not fitted; fitting will occur only on the training data after the dataset has been split.

## 2.6.2 Validate Pipeline

The preprocessing pipeline was validated to ensure that all components were configured correctly before model training. Validation confirmed the successful creation of the `Pipeline` and `ColumnTransformer`, verified the selected continuous features for scaling, and ensured that no fitting had been performed. The pipeline is now ready to be fitted exclusively on the training data during the model development phase.

## 2.6.3 Preprocessing Documentation

The preprocessing workflow was documented to provide a clear overview of the transformation process and design decisions. Documentation covers feature scaling strategy, pipeline architecture, validation approach, production considerations, and data leakage prevention. The preprocessing framework is now fully documented and ready for integration into model training.

---

# Dataset Splitting

## 2.7.1 Train / Validation / Test Split

The cleaned dataset was divided into training (80%), validation (10%), and testing (10%) subsets using stratified sampling. A two-stage split ensured that the original class distribution was preserved across all datasets. The resulting datasets will be used throughout model training, hyperparameter tuning, and final evaluation while preventing data leakage.

## 2.7.2 Stratification Check

A stratification check was performed to verify that the class distribution remained consistent across the training, validation, and testing datasets. The comparison confirmed that the fraud-to-normal transaction ratio was preserved, ensuring representative datasets for model training and evaluation.

## 2.7.3 Save Processed Data

The training, validation, and testing datasets were saved in the `data/processed/` directory as separate feature (`X`) and target (`y`) CSV files. Persisting these datasets ensures reproducibility, eliminates repeated preprocessing, and provides standardized inputs for all subsequent phases of the project.

# 2.8 Data Versioning

## 2.8.1 Initialize DVC

Data Version Control (DVC) was initialized to enable reproducible dataset management throughout the project. DVC integrates with Git by storing dataset metadata in version-controlled `.dvc` files while keeping the actual data outside the Git repository. This approach supports reproducibility, collaboration, and scalable machine learning workflows.

## 2.8.2 Track Raw & Processed Data

The raw dataset and processed datasets were brought under Data Version Control (DVC). Instead of storing large data files directly in Git, DVC tracks dataset metadata through `.dvc` files while maintaining the actual data in the local DVC cache. This approach improves reproducibility, enables efficient versioning of large datasets, and aligns the project with modern MLOps practices.

## 2.8.3 Documentation Update

The project now incorporates **Data Version Control (DVC)** to manage datasets independently from the source code.

### Versioning Strategy

- Raw datasets are tracked using DVC.
- Processed datasets are tracked using DVC.
- Git stores only the DVC metadata files (`.dvc`) rather than the actual datasets.
- Large data files are managed through the DVC cache, keeping the Git repository lightweight and reproducible.

### Benefits

- Reproducible machine learning experiments.
- Efficient versioning of large datasets.
- Clear separation between code and data.
- Simplified collaboration across development environments.
- Alignment with modern MLOps best practices.

At the completion of Phase 2, the project contains a fully documented data preparation pipeline, including data validation, cleaning, exploratory analysis, feature engineering, preprocessing, dataset splitting, and dataset versioning.