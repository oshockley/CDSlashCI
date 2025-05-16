# CI/CD Pipeline with Cypress/MongoDB/Render Deployment

## Overview

This project demonstrates how to integrate a **CI/CD pipeline** into a full-stack application using **GitHub Actions**, **Cypress** for testing, and **Render** for automatic deployment.

The pipeline is designed to:

- Run Cypress **component tests** automatically when a **Pull Request (PR)** is made to the `develop` branch.
- Deploy the application automatically to **Render** when code is **merged to the `main` branch**.

---

## 🧠 User Story

> **As a** software engineer looking to integrate a CI/CD pipeline into a codebase,  
> **I want** a full-stack application that runs test cases when a Pull Request is made to the `develop` branch and automatically deploys to Render when the code is merged to the `main` branch,  
> **So that** I can ensure all integrations are clean, tests pass, and the application stays up to date with every major release.

---

## ✅ Acceptance Criteria

| Given | When | Then |
|-------|------|------|
| A full-stack application | I upload new features | I should be making Pull Requests to the `develop` branch |
| A PR is created to `develop` | GitHub Actions should trigger | Cypress component tests should run |
| Tests pass | | I should see results in the GitHub Actions UI |
| The PR is merged to `main` | | A GitHub Action should deploy the app to Render automatically |

---

## 🛠️ Technologies Used

- **GitHub Actions** – For CI/CD automation
- **Cypress** – For component testing
- **Render** – For deployment
- **Node.js / Express / React** – Full-stack tech stack (can vary by project)

---

## 🔧 GitHub Actions Setup

### 1. Run Cypress Tests on `develop` PR

Create a file: `.github/workflows/test.yml`

```yaml
name: Pull Request on Develop Branch

# Run tests for PRs to Develop branch
on:
  pull_request:
    branches:
      - develop # Run tests for PRs against develop branch

jobs:
  test-runner:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x, 20.x, 22.x]
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: CI and CD using Node ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      - name: install dependencies
        run: npm ci
      - name: Cypress run component tests
        uses: cypress-io/github-action@v6
        with:
          build: npm run build
          start: npm run start
          component: true #Should run Component testing
```
Link to Deployed Application: https://cdslashci.onrender.com
![Screenshot (2127)](https://github.com/user-attachments/assets/bd01a4e8-a417-4a7c-a20e-991a89afa206)

