import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import { isValidLength } from "./index.ts";

Deno.test("Card number length", () => {
  assertEquals(true, isValidLength("1234567891011"));
  assertEquals(false, isValidLength("123"));
  assertEquals(false, isValidLength("12345678910111213"));
});
