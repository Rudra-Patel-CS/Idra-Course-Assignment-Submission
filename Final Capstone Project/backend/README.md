# E-Commerce Purchase Intent Prediction API (FastAPI Backend)

FastAPI REST API serving machine-learning prediction requests, dataset analytics, and model performance metrics for Project #10: "Online Shopping Behaviour: Analysing Customer Activity and Predicting Purchase Intent".

## Requirements

- Python 3.10+
- `scikit-learn==1.6.1` (Required for binary compatibility with `P10_purchase_intent_model.joblib`)

## Installation & Setup

1. Navigate to the project root or `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the API server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```

## API Endpoints

- `GET /` — API Status
- `GET /health` — Health Check & Model Load Confirmation
- `GET /model-info` — Trained Pipeline Information & Verified Metrics
- `POST /predict` — Main ML Prediction Endpoint
- `GET /analytics/overview` — Executive Summary Statistics from Dataset
- `GET /analytics/charts` — Aggregated Visual Data for Analytics Dashboard
- `GET /analytics/model-performance` — Comparative Model Evaluation Results (Decision Tree, Random Forest, Logistic Regression)
