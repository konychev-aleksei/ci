import { defineConfig } from "@playwright/test";

export default defineConfig({
  testMatch: ["tests/e2e/*.e2e.test.ts?(x)"],
  use: {
    testIdAttribute: "data-pw",
  },
});
