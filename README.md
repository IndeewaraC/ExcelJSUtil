Playwright Excel Automation (JavaScript)

This repository demonstrates how to perform Excel file read/write operations using JavaScript and integrate them into a Playwright automation suite. 
It is designed to handle dynamic data scenarios, such as downloading a file, modifying its contents, and verifying the changes.

├── data                 # Storage for Excel files (.xlsx) and test data
├── helper               # Generic utility functions
├── pageObjects          # Page classes for UI interactions
├── playwright-report    # Auto-generated HTML execution reports
├── src                  # Core logic
│   ├── excel_code.js    # Logic for Excel Read/Write operations
│   └── upload_download.spec.js  # Playwright test scripts
├── test-results         # Metadata and artifacts from the last run
├── playwright.config.js # Playwright configuration for JS
└── package.json         # Project dependencies

Excel Integration: Uses JavaScript libraries (like exceljs or xlsx) to parse and edit spreadsheets.
Download/Upload Testing: Automates the workflow of downloading a file, performing data verification, and uploading it back to the application.
POM Architecture: Maintains a clean separation between UI selectors and test logic.
