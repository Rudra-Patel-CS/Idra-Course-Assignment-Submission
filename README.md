# IDRA Course Assignment Submission

A complete learning portfolio for my **India Data Research Academy (IDRA) Data Science & AI coursework**, containing practical assignments, Jupyter/Google Colab notebooks, datasets, data-analysis exercises, statistics, preprocessing, machine learning, and the final capstone project.

This repository records the progression from **Python fundamentals to data science and a deployed machine-learning application**.

---

## Repository Overview

This is the main repository for the IDRA course submissions.

It contains two broad parts:

1. **Daily / course assignments** covering programming, NumPy, Pandas, data cleaning, preprocessing, EDA, visualization, statistics, probability, regression, classification, and model evaluation.
2. **Final Capstone Project** combining data science, machine learning, backend API development, frontend development, model integration, and deployment.

The work is kept as separate notebooks, datasets, and project folders so individual practicals can be reviewed independently.

---

## Learning Progression

```text
Python Fundamentals
        ↓
Problem Solving
        ↓
Python Applications
        ↓
NumPy
        ↓
Pandas
        ↓
Data Understanding
        ↓
Data Cleaning
        ↓
Data Preprocessing
        ↓
EDA & Visualization
        ↓
Statistics & Probability
        ↓
Machine Learning
        ↓
Model Evaluation
        ↓
Final Capstone
        ↓
Full-Stack ML Application
        ↓
Deployment
```

---

# Coursework

| Day | Assignment | Main Focus |
|---|---|---|
| Day 1 | Simple Calculator | Python basics, operators, input/output |
| Day 2 | Number Guessing Game | Random numbers, loops, conditions |
| Day 3 | Student Management System | Lists, dictionaries, CRUD operations |
| Day 4 | Student Management / Expense Tracker Work | Application logic and file handling |
| Day 5 | Library Management System | OOP, CSV handling, issue/return workflow |
| Day 6 | NumPy Practice | Arrays, indexing, slicing, reshaping |
| Day 7 | Dataset Summary Report | Pandas inspection and descriptive analysis |
| Day 8 | E-Commerce Sales Analysis | Filtering, grouping, aggregation |
| Day 9 | Processed E-Commerce Dataset | Merge, concat, dates, feature creation |
| Day 10 | Flight Operations Data Analysis | Operational EDA and business analysis |
| Day 11 | Cleaned Company Employee Dataset | Missing values, duplicates, consistency |
| Day 12 | Used Car Data Preprocessing | Outliers, encoding, scaling, leakage prevention |
| Day 13 | Restaurant Branch Performance EDA | Business EDA and correlations |
| Day 14 | Food Delivery Visualization Portfolio | Visualization and comparative analysis |
| Day 15 | Executive Hotel Booking EDA | Large-dataset EDA and reporting |
| Day 16 | Student Wellbeing Statistical Analysis & Probability | Statistics and probability |
| Day 18 & 19 | Student Performance Prediction & Model Evaluation | Regression, classification, evaluation |
| Final | IDRA Capstone Project | End-to-end ML application |

> Day 17 is not represented as a separate assignment folder in the current repository structure.

---

# Repository Structure

The current repository contains dedicated assignment folders for the later coursework, early notebooks/datasets at the root, and a complete capstone application.

```text
Idra-Course-Assignment-Submission/
│
├── Day 1 Assignment/
├── Day 2 Assignment/
├── Day 3 Assignment/
├── Day 4 Assignment/
├── Day 5 Assignment/
├── Day 6 Assignment/
├── Day 7 Assignment/
├── Day 8 Assignment/
├── Day 9 Assignment/
├── Day 10 Assignment/
├── Day 11 Assignment/
├── Day 12 Assignment/
├── Day 13 Assignment/
├── Day 14 Assignment/
├── Day 15 Assignment/
├── Day 16 Assignment/
├── Day 18,19 Assignment/
│
├── Final Capstone Project/
│   ├── backend/
│   ├── frontend/
│   ├── model/
│   ├── data/
│   ├── notebook/
│   ├── Ref. Material To Do This/
│   ├── Capstone_Final_Project_By_Rudra_Patel.ipynb
│   └── build.sh
│
├── .gitignore
├── build.sh
├── Day_1_Calculator.ipynb
├── Number_Guess_Game_Day_2.ipynb
├── Day_3_Student_management_System.ipynb
├── Student_Management_System_Day_4.ipynb
├── Day_5_Library_Management_System.ipynb
├── Day_6_Practisebook.ipynb
├── Day_7_Datset_Summary_report.ipynb
├── Day_8_E_commerce_Sales_Analysis.ipynb
└── README.md
```

---

# Python Foundation

The first part of the course focuses on building programming fundamentals before moving into data science.

## Day 1 — Simple Calculator

Practices:

- numeric input
- arithmetic operators
- division
- floor division
- modulus
- exponentiation
- formatted output

## Day 2 — Number Guessing Game

Practices:

- random number generation
- loops
- conditional statements
- user input
- attempt tracking

## Day 3 — Student Management System

Practices:

- lists
- dictionaries
- CRUD operations
- search
- update
- delete
- menu-driven programming

## Day 4 — Application Practice

Continues Python application development and structured data/file handling.

## Day 5 — Library Management System

Practices:

- object-oriented programming
- books and members
- issue/return workflow
- due dates
- fines
- CSV storage
- menu-driven application design

## Day 6 — NumPy Practice

Practices:

- array creation
- dimensions
- indexing
- slicing
- reshaping
- numerical operations
- boolean masking
- broadcasting
- aggregation

---

# Data Analysis Assignments

## Day 7 — Dataset Summary Report

Covers:

- dataset loading
- shape and columns
- data types
- missing values
- descriptive statistics
- unique values
- basic observations

## Day 8 — E-Commerce Sales Analysis

Covers:

- sales totals
- averages
- products
- categories
- cities
- payment methods
- grouping
- sorting
- aggregation
- business observations

## Day 9 — Processed E-Commerce Dataset

Covers:

- multiple CSV files
- merging datasets
- concatenation
- date conversion
- date feature extraction
- `apply()`
- derived features
- final dataset export

## Day 10 — Flight Operations Data Analysis

Covers:

- airline analysis
- passenger analysis
- delays
- weather
- routes
- aircraft
- travel class
- booking channel
- load factor
- estimated revenue
- operational insights

---

# Data Cleaning & Preprocessing

## Day 11 — Company Employee Dataset Cleaning

The messy employee dataset is cleaned using:

- `isnull()`
- `fillna()`
- mean/median/mode imputation
- duplicate detection
- `drop_duplicates()`
- categorical standardization
- string cleaning
- numerical conversion
- date conversion
- before/after validation
- cleaned CSV export

## Day 12 — Used Car Data Preprocessing

The used-car workflow demonstrates:

- numerical and categorical feature identification
- IQR-based outlier handling
- feature/target separation
- ordinal encoding
- one-hot encoding
- standardization
- train/test split
- training-only fitting of preprocessing transformations
- verification of processed data

The workflow specifically demonstrates how to avoid **data leakage** by fitting transformations on training data and only transforming the test data.

---

# Exploratory Data Analysis & Visualization

## Day 13 — Restaurant Branch Performance

The analysis covers:

- revenue
- profit
- customers
- orders
- marketing spend
- branch comparisons
- regional comparisons
- store types
- customer ratings
- delivery time
- correlations
- outliers
- business insights

## Day 14 — Food Delivery Visualization Portfolio

The visualization work covers:

- time-series analysis
- city comparisons
- cuisine analysis
- order channels
- weather
- revenue
- orders
- marketing spend
- delivery time
- ratings
- distributions
- box plots
- scatter plots
- correlation analysis

## Day 15 — Executive Hotel Booking EDA

The larger hotel-booking dataset is analyzed through:

- reservation status
- cancellations
- hotel type
- market segment
- lead time
- ADR
- stay duration
- customer type
- room information
- special requests
- satisfaction
- revenue
- relationships
- outliers
- executive-level insights

---

# Statistics & Probability

## Day 16 — Student Wellbeing Statistical Analysis

The assignment applies:

- mean
- median
- mode
- standard deviation
- quartiles
- IQR
- outlier detection
- z-scores
- empirical rule
- probability
- conditional probability
- mutually exclusive events
- independence
- Bayes' theorem

This assignment moves the coursework from descriptive analysis toward quantitative statistical reasoning.

---

# Machine Learning

## Day 18 & 19 — Student Performance Prediction

The assignment applies a complete ML workflow to student-performance data.

### Regression

`exam_score` is used as the regression target.

The workflow includes:

- EDA
- numerical/categorical feature identification
- missing-value handling
- feature selection
- train/test split
- preprocessing
- Linear Regression
- prediction
- MAE
- MSE
- RMSE
- R²
- actual vs predicted analysis

### Classification

The regression target is converted into:

```text
exam_score >= 50 → Pass
exam_score < 50  → Fail
```

Logistic Regression is then used for classification.

Evaluation includes:

- confusion matrix
- accuracy
- precision
- recall
- F1-score
- classification report
- training vs testing comparison

The assignment also discusses possible overfitting and underfitting based on training and testing performance.

---

# Final IDRA Capstone

## Online Shopping Behaviour: Analysing Customer Activity and Predicting Purchase Intent

The final capstone is maintained in:

```text
Final Capstone Project/
```

The project analyzes online-shopping/session behaviour and predicts whether a session results in a purchase.

### Dataset

```text
25,000 rows
29 columns
```

Target:

```text
purchased
0 → Not Purchased
1 → Purchased
```

The capstone extends the coursework into a complete deployed machine-learning application.

---

## Capstone Workflow

```text
Raw Dataset
    ↓
Data Understanding
    ↓
Data Cleaning
    ↓
EDA
    ↓
Statistical Analysis
    ↓
Feature Engineering
    ↓
Leakage Prevention
    ↓
Train/Test Split
    ↓
Preprocessing
    ↓
Model Training
    ↓
Model Evaluation
    ↓
Model Packaging
    ↓
FastAPI Backend
    ↓
React Frontend
    ↓
Deployment
```

---

## Capstone Data Cleaning

The capstone workflow includes:

- dataset audit
- dimensions and data types
- missing-value analysis
- duplicate analysis
- target analysis
- EDA
- statistical analysis
- feature engineering
- model preparation

The documented final cleaning validation is:

```text
Rows:             25,000
Columns:          29
Missing values:   0
Duplicate rows:   0
```

Cleaned dataset:

```text
Final Capstone Project/data/P_10_Ecommerce_Cleaned.csv
```

---

## Capstone Feature Engineering

The target variable is:

```text
purchased
```

Outcome-related variables excluded from model features:

```text
purchased
revenue
revenue_normalized
cart_abandoned
```

The raw `visit_date` is converted into temporal features such as:

```text
visit_year
visit_day_of_year
```

The raw date is then removed from the model input.

This prevents outcome information from being incorrectly used as a prediction feature.

---

# Capstone Machine Learning

The project trains three classification models:

```text
Logistic Regression
Decision Tree
Random Forest
```

### Train/Test Configuration

```text
Training data: 80%
Testing data: 20%
random_state: 42
stratification: enabled
```

### Preprocessing

Numerical features:

```text
StandardScaler
```

Categorical features:

```text
OneHotEncoder(handle_unknown="ignore")
```

### Evaluation

The project evaluates models using:

- Accuracy
- Precision
- Recall
- F1-score
- ROC-AUC
- Confusion matrices
- ROC curves

Exact metric values are intentionally not duplicated here; the actual notebook/application outputs are the authoritative source for the final model results.

---

# Capstone Model Artifact

The packaged trained pipeline is stored at:

```text
Final Capstone Project/model/P10_purchase_intent_model.joblib
```

The saved artifact contains the preprocessing and trained classifier pipeline used by the application.

---

# Capstone Application Architecture

```text
                    React Frontend
                          │
                     HTTP / JSON
                          │
                          ▼
                   FastAPI Backend
                          │
                          ▼
            P10_purchase_intent_model.joblib
                          │
                          ▼
              Prediction + Probability
                          │
                          ▼
                   React Result UI
```

The frontend does not directly load the machine-learning model. The Python/FastAPI backend loads the saved pipeline and handles prediction requests.

---

# Capstone Backend

Location:

```text
Final Capstone Project/backend/
```

Technologies:

- Python
- FastAPI
- Uvicorn
- Pandas
- NumPy
- Scikit-learn
- Joblib
- Pydantic

Documented API routes include:

```text
GET  /
GET  /health
GET  /model-info
POST /predict
GET  /analytics/overview
GET  /analytics/charts
GET  /analytics/model-performance
```

---

# Capstone Frontend

Location:

```text
Final Capstone Project/frontend/
```

Technologies:

- React 18
- Vite
- Tailwind CSS
- Axios
- React Router
- Recharts
- Lucide React

Main application areas:

- Dashboard
- Analytics
- Prediction
- Model Performance
- Methodology / About

---

# Capstone Local Setup

## Backend

```bash
cd "Final Capstone Project/backend"
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

The backend documentation specifies Python 3.10+ and `scikit-learn==1.6.1` for compatibility with the packaged model.

## Frontend

```bash
cd "Final Capstone Project/frontend"
npm install
npm run dev
```

The frontend uses Vite for local development and communicates with the FastAPI backend.

---

# Capstone Deployment

The completed application is deployed on Render:

**Live Application:**  
https://ecommerce-purchase-prediction-uueb.onrender.com

---

# Technologies Used Across the Repository

| Area | Technologies |
|---|---|
| Programming | Python, JavaScript |
| Data Analysis | Pandas, NumPy |
| Visualization | Matplotlib, Seaborn, Recharts |
| Machine Learning | Scikit-learn |
| Model Serialization | Joblib |
| Backend | FastAPI, Uvicorn |
| Validation | Pydantic |
| Frontend | React, Vite |
| Styling | Tailwind CSS |
| API Communication | Axios |
| Notebook Environment | Jupyter / Google Colab |
| Deployment | Render |

---

# Engineering & Data Science Practices

The repository emphasizes:

- reproducible notebook workflows
- dataset inspection before analysis
- explicit cleaning decisions
- appropriate missing-value treatment
- duplicate detection
- categorical standardization
- outlier investigation
- feature/target separation
- preprocessing pipelines
- train/test separation
- leakage prevention
- multiple model-evaluation metrics
- training/testing comparison
- preservation of the final trained model
- separation of frontend, backend, model and data components

The repository-level `.gitignore` also excludes common Python environments, bytecode, Node modules, build output, and temporary directories.

---

# Learning Outcomes

By progressing through these assignments, the repository demonstrates practical experience with:

```text
Programming
    ↓
Data Handling
    ↓
Data Analysis
    ↓
Data Cleaning
    ↓
Data Preprocessing
    ↓
Visualization
    ↓
Statistics
    ↓
Machine Learning
    ↓
Model Evaluation
    ↓
API Development
    ↓
Frontend Integration
    ↓
Deployment
```

The daily assignments demonstrate individual skills, while the final capstone combines those skills into one end-to-end Data Science and Machine Learning application.

---

# Author

**Rudra Patel**

B.Tech Computer Science & Engineering

IDRA Data Science & AI Coursework

GitHub: [Rudra-Patel-CS](https://github.com/Rudra-Patel-CS)

---

# Repository

[Idra-Course-Assignment-Submission](https://github.com/Rudra-Patel-CS/Idra-Course-Assignment-Submission)

---

## Final Perspective

This repository represents the complete progression of the IDRA coursework:

```text
Learn
  ↓
Practice
  ↓
Analyze
  ↓
Clean
  ↓
Prepare
  ↓
Model
  ↓
Evaluate
  ↓
Build
  ↓
Deploy
```

The result is a single portfolio containing the coursework assignments and a final deployed capstone that demonstrates how those individual skills come together in a practical Data Science & AI project.
