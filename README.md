🎭 Playwright Project
This project uses Playwright for end-to-end testing of web applications. Playwright enables fast, reliable, and capable browser automation.

🧰 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version 16+ recommended)

npm or yarn

You can verify your installation with:

node -v
npm -v

🚀 Getting Started
1. Clone the Repository

git clone https://github.com/your-username/your-playwright-project.git
cd your-playwright-project

2. Install Dependencies

npm install

3. Install Playwright Browsers

npx playwright install

🧪 Running Tests
Run All Tests

npx playwright test

Run a Specific Test File

npx playwright test tests/example.spec.ts

📂 Project Structure

.
├── tests/                  # Test files
│   └── example.spec.ts
├── playwright.config.ts    # Playwright configuration
├── package.json
├── tsconfig.json           # TypeScript configuration (if using TS)
└── README.md

📸 Viewing Test Reports
After a test run, you can view the HTML report:

npx playwright show-report

For Api Swagger docs

https://crud-be-ujjp.onrender.com/api-docs

