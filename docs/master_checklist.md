Fraud Detection System
│
├── Phase 0 : Project Planning & Architecture
│   │   
│   ├── 0.1 Project Vision
│   ├── 0.2 Problem Statement
│   ├── 0.3 Objectives
│   ├── 0.4 Scope
│   ├── 0.5 Functional Requirements
│   ├── 0.6 Non Functional Requirements
│   ├── 0.7 Target Users
│   ├── 0.8 Use Cases
│   ├── 0.9 UI/UX Discussion
│   ├── 0.10 Design Language Decision
│   ├── 0.11 Frontend Architecture
│   ├── 0.12 Backend Architecture
│   ├── 0.13 ML Architecture
│   ├── 0.14 Dataset Discussion
│   ├── 0.15 Feature Engineering Plan
│   ├── 0.16 Model Selection Discussion
│   ├── 0.17 Evaluation Metrics
│   ├── 0.18 Explainability Strategy
│   ├── 0.19 Project Folder Strategy
│   ├── 0.20 Tech Stack Decision
│   ├── 0.21 SDLC Decision
│   ├── 0.22 ML Lifecycle Decision
│   ├── 0.23 Development Roadmap
│   ├── 0.24 Deployment Strategy
│   ├── 0.25 Testing Strategy
│   ├── 0.26 Security Considerations
│   ├── 0.27 Documentation Plan
│   ├── 0.28 Git Strategy
│   ├── 0.29 Versioning Strategy
│   └── 0.30 README Planning
│
├── Phase 1 : Project Initialization
│   │
│   ├── 1.1 Repository Initialization
│   ├── 1.2 Git Setup
│   ├── 1.3 Python Environment
│   ├── 1.4 Dependency Management
│   ├── 1.5 Directory Structure
│   ├── 1.6 VSCode Workspace
│   ├── 1.7 Pre-Commit Setup
│   ├── 1.8 Initial README
│   └── 1.9 First Commit
│
├── Phase 2 : Data Engineering
│   │
│   ├── 2.1 Dataset Collection
│   │    ├── 2.1.1 Dataset Selection
│   │    ├── 2.1.2 Dataset Documentation
│   │    ├── 2.1.3 Data Dictionary
│   │    ├── 2.1.4 Dataset Licensing & Source
│   │    └── 2.1.5 Dataset Download & Storage
│   │
│   ├── 2.2 Dataset Validation
│   │   ├── 2.2.1 File Validation
│   │   ├── 2.2.2 Schema Validation
│   │   ├── 2.2.3 Missing Values Analysis
│   │   ├── 2.2.4 Duplicate Records Analysis
│   │   ├── 2.2.5 Data Types Validation
│   │   └── 2.2.6 Target Variable Validation
│   │
│   ├── 2.3 Data Cleaning
│   │   ├── 2.3.1 Remove Duplicates
│   │   ├── 2.3.2 Handle Missing Values
│   │   ├── 2.3.3 Handle Invalid Values
│   │   ├── 2.3.4 Outlier Analysis
│   │   └── 2.3.5 Data Consistency Checks
│   │
│   ├──2.4 Exploratory Data Analysis
│   │   ├── 2.4.1 Dataset Overview
│   │   ├── 2.4.2 Univariate Analysis
│   │   ├── 2.4.3 Bivariate Analysis
│   │   ├── 2.4.4 Correlation Analysis
│   │   ├── 2.4.5 Target Distribution
│   │   └── 2.4.6 Business Insights
│   │
│   ├── 2.5 Feature Engineering
│   │   ├── 2.5.1 Feature Selection
│   │   ├── 2.5.2 Feature Creation
│   │   ├── 2.5.3 Encoding Strategy
│   │   ├── 2.5.4 Scaling Strategy
│   │   └── 2.5.5 Feature Importance Review
│   │
│   ├── 2.6 Data Preprocessing
│   │   ├── 2.6.1 Build Preprocessing Pipeline    
│   │   ├── 2.6.2 Validate Pipeline (updated 2.6.3 to 2.6.2)
│   │   └── 2.6.3 Preprocessing Documentation 
│   │
│   ├── 2.7 Dataset Spiltting
│   │   ├── 2.7.1 Train/Validation/Test Split    
│   │   ├── 2.7.2 Stratification Check
│   │   └── 2.7.3 Save Processed Data
│   │
│   └── 2.8 Data Versioning
│       ├── 2.8.1 Initiate DVC
│       ├── 2.8.2 Track Raw & Processed Data
│       └── 2.8.3 Documentation Update
│
├── Phase 3 : Machine Learning
│   │
│   ├── 3.1 Baseline Model
|   │    ├── 3.1.1 Load Processed Data
│   │    ├── 3.1.2 Fit Preprocessing Pipeline
│   │    ├── 3.1.3 Train Baseline Logistic Regression
│   │    ├── 3.1.4 Baseline Performance
│   │    └── 3.1.5 Documentation Update
│   │
│   ├── 3.2 Handling Imbalanced Data
│   │   │
│   │   ├── 3.2.1 Analyze Class Distribution
│   │   │   ├── Load target distribution
│   │   │   ├── Count Class Distribution
│   │   │   ├── Visualize class imbalance
│   │   │   ├── Calculate imbalance ratio
│   |   │   ├── Interpret the results
│   │   │   └── Documentation update
│   │   │
│   │   ├── 3.2.2 Baseline Without Resampling
│   │   │    ├── Review baseline metrics
│   │   │    ├── Analyze confusion matrix
│   │   │    ├── Identify model weaknesses
│   │   │    ├── Establish comparison benchmark
│   │   │    └── Documentatinn update
│   │   │
│   │   ├── 3.2.3 Class Weight Strategy
│   │   │   ├── Train weighted logistic regression
│   │   │   ├── Evaluate weighted model
│   │   │   ├── Compare with baseline
│   │   │   ├── Alalyze improvements
│   │   │   └── Documentation update
│   │   │
│   │   ├── 3.2.4 Random Oversampling
│   │   │   ├── Apply Random OverSampling
│   │   │   ├── Train oversampled model
│   │   │   ├── Evaluate oversampled model
│   │   │   ├── Compare with previous models
│   │   │   ├── Analyze improvements
│   │   │   └── Documentation update
│   │   ├── 3.2.5 Random Undersampling
│   │   │   ├── Apply Random UnderSampling
│   │   │   ├── Train undersampled model
│   │   │   ├── Evaluate undersampled model
│   │   │   ├── Analyze improvements
│   │   │   └── Documentation update
│   │   │
│   │   ├── 3.2.6 SMOTE Oversampling
│   │   │   ├── Apply SMOTE
│   │   │   ├── Train SMOTE model
│   │   │   ├── Evaluate SMOTE performance
│   │   │   ├── Compare with previous methods
│   │   │   ├── Analyze improvements
│   │   │   └── Documentation update
│   │   │
│   │   ├── 3.2.7 Strategy Comparison
│   │   │   ├── Build comparison table
│   │   │   ├── Compare Precision
│   │   │   ├── Compare Recall
│   │   │   ├── Compare F1-Score
│   │   │   ├── Compare ROC-AUC
│   │   │   ├── Compare PR-AUC
│   │   │   └── Visualize results
│   │   │
│   │   ├── 3.2.8 Select Final Sampling Strategy
│   │   │   ├── Select best approach
│   │   │   ├── Justify selection
│   │   │   ├── Save decision for future phases
│   │   │   └── Prepare final training dataset
│   │   │
│   │   │── 3.2.9 Documentation Update
│   |   │   ├── Update README.md
│   |   │   ├── Update docs/ml.md
│   │   │   └── Record experimental observations
│   │   │
│   │   └── 3.2.10 Export Final Datasets
│   │   
│   │── 3.3 Model Training
│   │   │── 3.3.1 Candidate Model Selection
│   │   │   ├── Fave final datasets
│   │   │   ├── Create model training notebook
│   │   │   ├── Load final datasets
│   │   │   ├── Verify dataset integrity
│   │   │   └── Candidate model selection
│   │   │
│   │   │── 3.3.2 Train Logistic Regression
│   │   │   ├── Import libraries
│   │   │   ├── Initialize model
│   │   │   ├── Train model
│   │   │   ├── Generate predictions
│   │   │   ├── Evaluate performance
│   │   │   ├── Confusion matrix
│   │   │   ├── ROC curve
│   │   │   ├── Precision-recall curve
│   │   │   ├── Model interpretation
│   │   │   └── Save results for comparison
│   │   │
│   │   ├── 3.3.3 Train Random Forest
│   │   │   ├── Import libraries
│   │   │   ├── Initialize model
│   │   │   ├── Train model
│   │   │   ├── Generate predictions
│   │   │   ├── Evaluate performance
│   │   │   ├── Confusion matrix
│   │   │   ├── ROC curve
│   │   │   ├── Precision-recall curve
│   │   │   ├── Model interpretation
│   │   │   └── Save results for comparison
│   │   │
│   │   ├── 3.3.4 Train XGBoost
│   │   │   ├── Import libraries
│   │   │   ├── Initialize model
│   │   │   ├── Train model
│   │   │   ├── Generate predictions
│   │   │   ├── Evaluate performance
│   │   │   ├── Confusion matrix
│   │   │   ├── ROC curve
│   │   │   ├── Precision-recall curve
│   │   │   ├── Feature importance
│   │   │   └── Save results for comparison
│   │   │
│   │   ├── 3.3.5 Train LightGBM (Optional)
│   │   │   ├── Import libraries
│   │   │   ├── Initialize model
│   │   │   ├── Train model
│   │   │   ├── Generate predictions
│   │   │   ├── Evaluate performance
│   │   │   ├── Confusion matrix
│   │   │   ├── ROC curve
│   │   │   ├── Precision-recall curve
│   │   │   ├── Feature importance
│   │   │   └── Save results for comparison
│   │   │
│   │   ├── 3.3.6 Training Summary
│   │   │   ├── Final model comparison table
│   │   │   ├── Best model by each metric
│   │   │   ├── Overall performance ranking
│   │   │   ├── Strengths and limitations
│   │   │   ├── Final model selection strategy
│   │   │   ├── Summary of findings
│   │   │   ├── Conclusion
│   │   │   └── Transition to hyperparameter tuning
│   │   │
│   │   └── 3.3.7 Documentation Update
│   │
│   ├── 3.4 Hyperparameter Tuning
│   │   ├── 3.4.1 Define Search Space
│   │   ├── 3.4.2 Cross Validation
│   │   ├── 3.4.3 Randomized/Grid Search
│   │   ├── 3.4.4 Best Model Selection
│   │   └── 3.4.5 Documentation Update
│   │
│   ├── 3.5 Model Evaluation
│   │   ├── 3.5.1 Evaluation Metrics
│   │   ├── 3.5.2 Confusion Matrix
│   │   ├── 3.5.3 ROC Curve & AUC
│   │   ├── 3.5.4 Precision-Recall Curve
│   │   ├── 3.5.5 Threshold Optimization
│   │   ├── 3.5.6 Generalization Assessment
│   │   └── 3.5.7 Documentation Update
│   │
│   ├── 3.6 Explainability
│   │   ├── 3.6.1 Native Feature Importance 
│   │   ├── 3.6.2 Permutation Importance
│   │   ├── 3.6.3 SHAP Explainability
│   │   ├── 3.6.4 Business Interpretation
│   │   └── 3.6.5 Documentation Update
│   │
│   ├── 3.7 Model Selection
│   │   ├── 3.7.1 Compare All Models
│   │   ├── 3.7.2 Select Production Model
│   │   ├── 3.7.3 Final Validation
│   │   └── 3.7.4 Documentation Update
│   │
│   └── 3.8 Model Serialization
│       ├── 3.8.1 Save Trained Model
│       ├── 3.8.2 Save Preprocessing Pipeline
│       ├── 3.8.3 Load & Verify Artifacts
│       ├── 3.8.4 Version Artifacts
│       └── 3.8.5 Documentation Update
│
├── Phase 4 : Backend Development
│   │
│   ├── 4.1 FastAPI Setup
│   ├── 4.2 API Architecture
│   ├── 4.3 Prediction API
│   │   ├── 4.3.0 Inference Preprocessing Pipeline
│   │   ├── 4.3.1 Model Loader
│   │   ├── 4.3.2 Request Schema
│   │   ├── 4.3.3 Response Schema
│   │   ├── 4.3.4 Prediction Service
│   │   ├── 4.3.5 Prediction Endpoint
│   │   └── 4.3.6 End-to-End Testing
│   │
│   ├── 4.4 Validation Layer
│   ├── 4.5 Error Handling
│   ├── 4.6 API Documentation
│   ├── 4.7 Logging
│   ├── 4.8 Health Check API
│   ├── 4.9 Configuration Management
│   └── 4.10 Documentation Update
│
├── Phase 5 : Frontend Development
│   │
│   ├── 5.1 Frontend Audit & Setup
│   ├── 5.2 Folder Architecture
│   ├── 5.3 Routing
│   ├── 5.4 Shared Layout
│   ├── 5.5 API Layer
│   ├── 5.6 Prediction Form
│   ├── 5.7 Prediction Results
│   ├── 5.8 Backend Integration
│   │   │
│   │   ├── 5.8.1 Backend CSV Upload API
│   │   │   ├── 5.8.1.1 Existing Schema Review
│   │   │   ├── 5.8.1.2 Batch Response Schema
│   │   │   ├── 5.8.1.3 Batch Prediction Service
│   │   │   ├── 5.8.1.4 CSV Upload Endpoint
│   │   │   ├── 5.8.1.5 CSV Validation
│   │   │   ├── 5.8.1.6 Swagger Testing
│   │   │   ├── 5.8.1.7 Backend Verification
│   │   │   └── 5.8.1.8 Phase Lock
│   │   │   
│   │   ├── 5.8.2 Frontend CSV Upload
│   │   │   │
│   │   │   ├── 5.8B.1 Full Frontend Audit
│   │   │   ├── 5.8B.2 Backend Contract Sync
│   │   │   ├── 5.8B.3 Prediction Page Refractor
│   │   │   ├── 5.8B.4 CSVUploader Component
│   │   │   ├── 5.8B.5 Upload Validation
│   │   │   ├── 5.8B.6 API Integration
│   │   │   ├── 5.8B.7 Loading & Progress UI
│   │   │   ├── 5.8B.8 Batch Result Summary
│   │   │   ├── 5.8B.9 Prediction Table
│   │   │   ├── 5.8B.10 Error Handling
│   │   │   ├── 5.8B.11 Frontend Verification
│   │   │   └── 5.8B.12 Phase Lock
│   │   │
│   │   └── 5.8.3 End-to-End Verification
│   │       │
│   │       ├── 5.8.3.1 End-to-End Workflow Audit
│   │       ├── 5.8.3.2 API Contract Verification
│   │       ├── 5.8.3.3 Empty Dataset Handling
│   │       ├── 5.8.3.4 Large File Handling
│   │       ├── 5.8.3.5 Invalid CSV Scenarios
│   │       ├── 5.8.3.6 Regression Testing
│   │       ├── 5.8.3.7 Integration Testing
│   │       └── 5.8.3.8 Phase Lock
│   │
│   ├── 5.9 Loading & Error States
│   │   │
│   │   ├── 5.9.1 Loading State
│   │   ├── 5.9.2 Upload Progress UX
│   │   ├── 5.9.3 Disable Duplicate Requests
│   │   ├── 5.9.4 Toast Notification System
│   │   ├── 5.9.5 Success & Error Feedback
│   │   ├── 5.9.6 Empty State
│   │   ├── 5.9.7 Network Failure Handling
│   │   ├── 5.9.8 Backend Failure Handling
│   │   └── 5.9.9 Phase Lock
│   │
│   ├── 5.10 Responsive Design
│   ├── 5.11 Documentation
│   ├── 5.12 Frontend Review Session
│   └── 5.13 Phase Lock
│
├── Phase 6 : Integration
│   │
│   ├── 6.1 Frontend ↔ Backend
│   ├── 6.2 Backend ↔ ML
│   ├── 6.3 Error Flow
│   └── 6.4 End-to-End Testing
│
├── Phase 7 : Deployment
│   │
│   ├── 7.1 Docker
│   ├── 7.2 Docker Compose
│   ├── 7.3 Cloud Deployment
│   ├── 7.4 Environment Variables
│   └── 7.5 Production Testing
│
├── Phase 8 : Portfolio Enhancement
│   │
│   ├── 8.1 Screenshots
│   ├── 8.2 Demo GIF
│   ├── 8.3 README Finalization
│   ├── 8.4 Architecture Diagram
│   ├── 8.5 Resume Bullet Points
│   └──  8.6 LinkedIn Ready Assets
│
└── Phase 9 : Project Completion
    │
    ├── 9.1 Final QA
    ├── 9.2 Cleanup
    ├── 9.3 GitHub Release
    ├── 9.4 Portfolio Integration
    └── 9.5 Final Lock




    docs/
│
├── architecture.md
├── deployment.md
├── testing.md
├── security.md
├── setup.md          ← Phase 1
├── data.md           ← Phase 2
├── ml.md             ← Phase 3
├── backend.md        ← Phase 4
├── frontend.md       ← Phase 5
├── integration.md    ← Phase 6
└── portfolio.md      ← Phase 8