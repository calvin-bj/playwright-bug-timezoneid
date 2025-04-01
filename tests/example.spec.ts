import { test } from "@playwright/test";

test("Log Date", async ({ page }) => {
  console.log("Expecting this timezone to be Australia/Sydney:");
  console.log(new Date());
});
