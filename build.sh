#!/usr/bin/env bash
# exit on error
set -o errexit

echo "=== Starting Unified Capstone Build ==="

# Navigate to Final Capstone Project directory if executing from repository root
if [ -d "Final Capstone Project" ]; then
    echo "Navigating into 'Final Capstone Project' directory..."
    cd "Final Capstone Project"
fi

echo "Working Directory: $(pwd)"

echo "--- 1. Building React Frontend ---"
cd frontend
npm install
npm run build
cd ..

echo "--- 2. Installing Python Backend Dependencies ---"
cd backend
pip install -r requirements.txt
cd ..

echo "=== Unified Build Successfully Completed ==="
