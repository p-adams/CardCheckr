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
  if (!cardNumber) {
    return false;
  }
  const digits = cardNumber.split("").map(Number);

  let isDoubleDigit = false;
  let sum = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
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

  return sum % 10 === 0;
}

export function CardCheckr(cardNumber: number): boolean {
  const cardNumberStr = String(cardNumber);
  if (!isValidLength(cardNumberStr)) {
    return false;
  }
  if (!isNumeric(cardNumberStr)) {
    return false;
  }
  return true;
}
