import {defineConfig} from '@playwright/test';


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testMatch: ["**/*.spec.ts"],
  fullyParallel: false,
  retries: 0,
  reporter: [
    [
      "junit",
      {
        outputFile: "./test-results/junit-report.xml",
        embedAnnotationsAsProperties: true,
      },
    ],
  ],
  use: {
    baseURL: "https://crud-be-ujjp.onrender.com",
    extraHTTPHeaders: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  },

  timeout: 60_000,

  expect: { timeout: 60_000 },
});
