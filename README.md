## Card Checkr

### Credit Card Validation Functions

This repository provides a collection of functions for validating credit card numbers in JavaScript/TypeScript. The functions perform various checks to ensure that a credit card number is valid based on different criteria.

### Functions

`isValidLength(cardNumber: string): boolean`

Checks if the length of the `cardNumber` string falls within the valid range for a credit card number. The valid range is between 13 and 16 digits. Returns `true` if the length is valid, and `false` otherwise.

`isDigit(digit: number): boolean`

Checks if the provided digit is a valid numeric digit (0-9). Returns `true` if the digit is valid, and `false` otherwise.

`isNumeric(cardNumber: string): boolean`

Checks if the `cardNumber` string consists of only numeric digits. Iterates through each character in the string and uses the `isDigit` function to validate each digit. Returns `true` if all characters are numeric, and `false` otherwise.

`isFormulaValid(cardNumber: string): boolean`

Performs the Luhn algorithm to validate the cardNumber string. The algorithm calculates a checksum by doubling every other digit, subtracting 9 if the result is greater than 9, and summing all the digits. Returns `true` if the checksum is divisible by 10, indicating a valid card number, and `false` otherwise.

`isValidCreditCardNumber(cardNumber: string): boolean`

Validates the `cardNumber` string by checking against specific card number patterns. The function uses regular expressions to match the card number against predefined patterns for different card types, including American Express, Visa, Mastercard, and Discover. Returns `true` if the card number matches any of the patterns, and `false` otherwise.

`CardCheckr(cardNumber: number): boolean`

Convenience function that combines multiple checks to validate a credit card number. Converts the cardNumber to a string and performs the following checks:

    Validates the length using isValidLength.
    Checks if the string consists of only numeric digits using isNumeric.
    Validates the card number using isValidCreditCardNumber.

Returns `true` if all checks pass, indicating a valid credit card number, and `false` otherwise.

Feel free to use these functions to validate credit card numbers in your JavaScript/TypeScript projects. Contributions and feedback are welcome!

### Run locally

    git clone https://github.com/p-adams/CardCheckr.git

```
import { CardChecker } from "./mod.ts";`

// validate Visa card
const cc = CardCheckr("4111111111111111") // true
```
