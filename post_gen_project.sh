#!/bin/bash

# Navigate to the newly created project directory
cd "tic_tac_toe_game_dojo"

# Install dependencies
echo "Installing dependencies..."
npm install
npm install --save-dev jest ts-jest @types/jest

# Run build to generate initial output files
echo "Building the project..."
npm run build

# Check GitHub CLI authentication status
if gh auth status > /dev/null 2>&1; then
    echo "You are already logged in to GitHub CLI."
else
    echo "You are not logged in to GitHub CLI. Logging in now..."
    gh auth login
fi

# Create GitHub repository

git init

git add .

git commit -m "First commit"

git branch -M main

gh repo create "tic_tac_toe_game_dojo" --private --source=. --remote=origin --confirm

git push -u origin main

# Open project in VScode

code . notes.md src/index.ts tests/index.test.ts
