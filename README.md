# CI/CD Pipeline with Cypress & Render Deployment

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
name: Run Cypress Tests

on:
  pull_request:
    branches: [develop]

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests
        run: npx cypress run
