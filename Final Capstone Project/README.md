# Online Shopping Behaviour: Analysing Customer Activity and Predicting Purchase Intent (IDRA Capstone Project #10)

Full-stack Data Science and Machine Learning web application predicting online shopping session purchase intent in real-time.

---
## Deployed Link:-
https://ecommerce-purchase-prediction-uueb.onrender.com
---

## 📌 Project Overview

- **Project Title:** Online Shopping Behaviour: Analysing Customer Activity and Predicting Purchase Intent
- **Project ID:** Project #10
- **Course Program:** IDRA Data Science & AI Capstone
- **Project Type:** Data Science + Machine Learning + Full-Stack Web Application
- **Target Variable:** `purchased` (Binary Classification: `0 = Not Purchased`, `1 = Purchased`)

---

## 🏗 System Architecture

```
                                  +-----------------------+
                                  |   React 18 Frontend   |
                                  |   (Vite + Tailwind)   |
                                  +-----------+-----------+
                                              |
                                              | HTTP REST API (Axios)
                                              v
                                  +-----------+-----------+
                                  |   FastAPI Backend     |
                                  |  (Python + Uvicorn)   |
                                  +-----------+-----------+
                                              |
                                              | joblib.load()
                                              v
                                  +-----------+-----------+
                                  | Authoritative ML Model|
                                  | (DecisionTree Pipeline|
                                  |  scikit-learn 1.6.1)  |
                                  +-----------------------+
```

---

## 📂 Directory Structure

```
Final Capstone Project/
│
├── backend/
│   ├── main.py                  # FastAPI Application & Endpoints
│   ├── requirements.txt         # Backend Python Dependencies (scikit-learn==1.6.1)
│   ├── .env.example             # Environment Configuration Template
│   └── README.md                # Backend Setup Instructions
│
├── frontend/
│   ├── package.json             # React Dependencies & Scripts
│   ├── vite.config.js           # Vite Configuration & Backend Proxy
│   ├── tailwind.config.js       # Tailwind CSS Configuration
│   ├── src/
│   │   ├── components/          # Reusable UI (Sidebar, Header, StatCard, etc.)
│   │   ├── pages/               # Dashboard, Analytics, Prediction, Performance, About
│   │   ├── services/            # Axios API Client Wrapper (api.js)
│   │   ├── App.jsx              # Routing & Layout Root
│   │   └── main.jsx             # React DOM Entry
│   └── README.md                # Frontend Setup Instructions
│
├── model/
│   └── P10_purchase_intent_model.joblib # Authoritative Trained ML Model Pipeline
│
├── data/
│   └── P_10_Ecommerce_Cleaned.csv       # Cleaned Capstone Dataset (25,000 Rows)
│
├── notebook/
│   └── P10_Ecommerce_Analysis.ipynb     # Reproducible 8-Phase Data Science Notebook
│
├── README.md                    # Root Project Documentation
└── .gitignore                   # Version Control Exclusion Rules
```

---

## 🛡 Target & Data Leakage Rules

Outcome/post-outcome variables are strictly excluded from prediction inputs:
- ❌ `purchased`
- ❌ `revenue`
- ❌ `revenue_normalized`
- ❌ `cart_abandoned`

Pre-session date values (`visit_date`) are dynamically transformed into temporal features (`visit_day`, `visit_month`, `visit_weekday`, `visit_season`, `visit_year`, `visit_day_of_year`).

---

## 🚀 Quick Start & How to Run

### 1. Backend Setup (FastAPI)

1. Activate virtual environment or open terminal:
   ```bash
   pip install -r backend/requirements.txt
   ```

2. Start FastAPI Uvicorn server:
   ```bash
   uvicorn backend.main:app --reload --port 8000
   ```
   *Backend running at: `http://127.0.0.1:8000`*

### 2. Frontend Setup (React + Vite)

1. Navigate to frontend folder and install packages:
   ```bash
   cd frontend
   npm install
   ```

2. Launch Vite development server:
   ```bash
   npm run dev
   ```
   *Frontend running at: `http://localhost:5173`*

---

## 🔌 API Endpoints Specification

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | API Root Status |
| `GET` | `/health` | Health Check & Model Load Confirmation |
| `GET` | `/model-info` | Deployed Model Information & Metrics |
| `POST` | `/predict` | Main Machine Learning Prediction Endpoint |
| `GET` | `/analytics/overview` | Executive Summary Statistics from Dataset |
| `GET` | `/analytics/charts` | Aggregated Chart Data for EDA Dashboard |
| `GET` | `/analytics/model-performance` | Comparative Model Evaluation Results |

---

## 📊 Model Information & Evaluation Results

- **Selected Model:** `DecisionTreeClassifier(max_depth=8, random_state=42)` Pipeline
- **Preprocessing:** `ColumnTransformer` (`StandardScaler` for numeric, `OneHotEncoder` for `session_duration_bucket`)
- **Evaluated Performance (Holdout Test Set N=5,000):**
  - **Accuracy:** `100.0%`
  - **Precision:** `100.0%`
  - **Recall:** `100.0%`
  - **F1-Score:** `100.0%`
  - **ROC-AUC:** `1.0000`

---

## 🔮 Future Improvements

1. Real-time streaming inference via WebSockets for high-frequency user tracking.
2. Automated SHAP / LIME explainable AI (XAI) feature attribution breakdown for individual predictions.
3. Multi-language localization and customizable dashboard widget arrangements.
