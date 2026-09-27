import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  testMatch: 'browser.spec.js',
  timeout: 45000,
  workers: 1,
  use: {
    baseURL: 'http://127.0.0.1:8080',
    viewport: { width: 1440, height: 900 },
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE } : {},
    screenshot: 'only-on-failure',
  },
  webServer: { command: 'python3 -m http.server 8080 --bind 127.0.0.1', url: 'http://127.0.0.1:8080', reuseExistingServer: !process.env.CI },
});
