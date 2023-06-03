import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import { isValidLength } from "./index.ts";

Deno.test("Card number length", () => {
  assertEquals(true, isValidLength("1234567891011"));
});
