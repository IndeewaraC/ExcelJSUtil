import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // 1. Path to your tests
  testDir: './src',

  // 2. Global Timeout for each test (30 seconds)
  timeout: 30 * 1000,

  expect: {
    // Timeout for assertions (Expectations)
    timeout: 5000, 
  },

  // 3. Run tests in parallel locally, but 1 at a time in CI (GitHub Actions)
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // 4. Reporter: Open the HTML report automatically if a test fails
  reporter: 'html',

  /* Shared settings for all projects below. */
  use: {
    // CRITICAL: Must be lowercase 'headless'
    headless: false, 
    
    // Modern apps often need a specific viewport
    viewport: { width: 1280, height: 720 },

    // Action-related settings
    actionTimeout: 0,
    ignoreHTTPSErrors: true,

    // Useful for your Portfolio: see what happened during the test
    screenshot: 'on',
    trace: 'retain-on-failure', // Great for debugging the "no result" issue!
    video: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});