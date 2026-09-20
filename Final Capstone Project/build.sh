#!/usr/bin/env bash
# exit on error
set -o errexit

echo "=== Starting Unified Capstone Build ==="

# Find script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo "Current Directory: $(pwd)"

echo "--- 1. Building React Frontend ---"
cd frontend
npm install
npm run build
cd "$SCRIPT_DIR"

echo "--- 2. Installing Python Backend Dependencies ---"
cd backend
pip install -r requirements.txt
cd "$SCRIPT_DIR"

echo "=== Unified Build Successfully Completed ==="
