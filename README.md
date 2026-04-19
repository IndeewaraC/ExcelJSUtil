# 📊 Playwright Excel Automation (Data-Driven Testing)

[![Playwright Tests](https://github.com/IndeewaraC/ExcelJSUtil/actions/workflows/playwright.yml/badge.svg)](#) *(Note: Replace with your actual GitHub Actions badge link once configured)*

## 💡 TL;DR & Business Value
**The Problem:** Hardcoded test data leads to brittle automation suites, high maintenance overhead, and limits the ability to test complex edge cases at scale. 
**The Solution:** This utility integrates `ExcelJS` with Playwright to enable true Data-Driven Testing (DDT). By externalizing test data into Excel spreadsheets, this framework allows for scalable test execution across massive datasets and empowers non-technical stakeholders (like Business Analysts or Product Managers) to contribute to test coverage without ever needing to touch the codebase.

---

## 📖 Project Overview
This repository demonstrates how to perform robust Excel file read/write operations using JavaScript and seamlessly integrate them into a Playwright automation suite. It is specifically designed to handle dynamic data scenarios, such as automating the download of a file, programmatically modifying its contents, and verifying the changes via application upload.

## ✨ Key Features
* **📁 Advanced Excel Integration:** Utilizes JavaScript libraries (`exceljs`) to programmatically parse, edit, and validate complex spreadsheets on the fly.
* **🔄 Download/Upload Workflows:** Fully automates the end-to-end user journey of downloading a generated file, performing data verification against expected outcomes, and uploading it back into the UI.
* **🏗️ Page Object Model (POM):** Architected using POM to maintain a strict, clean separation between UI element locators and core test logic, ensuring high maintainability.

---

## 🗄️ Project Structure

```text
├── data                 # Storage for Excel files (.xlsx) and dynamic test data
├── helper               # Generic utility functions (Excel parsers, data formatters)
├── pageObjects          # Page classes for UI interactions (POM architecture)
├── playwright-report    # Auto-generated HTML execution reports
├── src                  # Core business and testing logic
│   ├── excel_code.js             # Logic for Excel Read/Write operations
│   └── upload_download.spec.js   # Playwright end-to-end test scripts
├── test-results         # Metadata and artifacts from the last run
├── playwright.config.js # Playwright configuration for JS
└── package.json         # Project dependencies
