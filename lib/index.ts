export function isValidLength(cardNumber: string): boolean {
  const len = cardNumber.length;
  if (len < 13 || len > 16) {
    return false;
  }
  return true;
}

export function isDigit(digit: number): boolean {
  if (digit >= 0 && digit <= 9) {
    return true;
  }
  return false;
}

export function isNumeric(cardNumber: string): boolean {
  for (const n of cardNumber) {
    if (!isDigit(Number(n))) {
      return false;
    }
  }
  return true;
}

export function isFormulaValid(cardNumber: string): boolean {
  // Check if the card number is empty or contains non-digit characters
  if (!cardNumber) {
    return false;
  }

  // Reverse the card number and convert it to an array of digits
  const digits = cardNumber.split("").reverse().map(Number);

  let sum = 0;
  let isDoubleDigit = false;

  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];

    if (isDoubleDigit) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isDoubleDigit = !isDoubleDigit;
  }

  // Check if the sum is divisible by 10
  return sum % 10 === 0;
}

export function isValidCreditCardNumber(cardNumber: string): boolean {
  // Check for specific card number patterns
  const patterns = {
    amex: /^3[47]\d{13}$/,
    visa: /^4\d{12}(\d{3})?$/,
    mastercard: /^5[1-5]\d{14}$/,
    discover: /^(6011|65\d{2}|64[4-9]\d)\d{12}$/,
  };

  // Check if the card number matches any of the patterns
  if (!Object.values(patterns).some((pattern) => pattern.test(cardNumber))) {
    return false;
  }

  return true;
}

export function CardCheckr(cardNumber: number): boolean {
  const cardNumberStr = String(cardNumber);
  if (!isValidLength(cardNumberStr)) {
    return false;
  }
  if (!isNumeric(cardNumberStr)) {
    return false;
  }
  if (!isFormulaValid(cardNumberStr)) {
    return false;
  }
  if (!isValidCreditCardNumber(cardNumberStr)) {
    return false;
  }
  return true;
}
