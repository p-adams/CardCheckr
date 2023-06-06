import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import {
  isDigit,
  isFormulaValid,
  isNumeric,
  isValidCreditCardNumber,
  isValidLength,
  CardCheckr,
} from "./index.ts";

Deno.test("Card number length", () => {
  assertEquals(true, isValidLength("1234567891011"));
  assertEquals(false, isValidLength("123"));
  assertEquals(false, isValidLength("12345678910111213"));
});

Deno.test("Is digit", () => {
  assertEquals(true, isDigit(1));
  assertEquals(true, isDigit(0));
  assertEquals(false, isDigit(-1));
  assertEquals(false, isDigit(10));
  assertEquals(true, isDigit(9));
});

Deno.test("Is numeric", () => {
  assertEquals(true, isNumeric("1234567"));
  assertEquals(false, isNumeric("123a567"));
});

Deno.test("isFormulaValid should return true for a valid card number", () => {
  const validNumber = "4532015112830366";
  const result = isFormulaValid(validNumber);
  assertEquals(result, true);
});

Deno.test(
  "isFormulaValid should return false for an invalid card number",
  () => {
    const invalidNumber = "4532015112830365";
    const result = isFormulaValid(invalidNumber);
    assertEquals(result, false);
  }
);

Deno.test("isFormulaValid should return false for an empty string", () => {
  const emptyString = "";
  const result = isFormulaValid(emptyString);
  assertEquals(result, false);
});

Deno.test("isFormulaValid should return false for a non-numeric input", () => {
  const nonNumericInput = "4532ABCD5112830366";
  const result = isFormulaValid(nonNumericInput);
  assertEquals(result, false);
});

Deno.test(
  "isFormulaValid should return false for a card number with only one digit",
  () => {
    const singleDigitNumber = "4";
    const result = isFormulaValid(singleDigitNumber);
    assertEquals(result, false);
  }
);

Deno.test("Validate Visa", () => {
  assertEquals(true, isValidCreditCardNumber("4111111111111111"));
});
Deno.test("Validate Discover", () => {
  assertEquals(true, isValidCreditCardNumber("6011111111111117"));
});
Deno.test("Validate Amex", () => {
  assertEquals(true, isValidCreditCardNumber("378282246310005"));
});
Deno.test("Validate MasterCard", () => {
  assertEquals(true, isValidCreditCardNumber("5105105105105100"));
});
Deno.test("Validate invalid card", () => {
  assertEquals(false, isValidCreditCardNumber("1234567890123456"));
});
Deno.test("Validate empty card", () => {
  assertEquals(false, isValidCreditCardNumber(""));
});

Deno.test("CardCheckr - Valid Visa Card", () => {
  assertEquals(true, CardCheckr(4111111111111111));
});

Deno.test("CardCheckr - Valid Mastercard Card", () => {
  assertEquals(true, CardCheckr(5555555555554444));
});

Deno.test("CardCheckr - Valid Discover Card", () => {
  assertEquals(true, CardCheckr(6011111111111117));
});

Deno.test("CardCheckr - Valid American Express Card", () => {
  assertEquals(true, CardCheckr(378282246310005));
});

Deno.test("CardCheckr - Invalid Card Number", () => {
  assertEquals(false, CardCheckr(1234567890123456));
});

Deno.test("CardCheckr - Invalid Card Length", () => {
  assertEquals(false, CardCheckr(123456));
});

Deno.test("CardCheckr - Non-Numeric Card Number", () => {
  assertEquals(false, CardCheckr("123456abcdef"));
});
