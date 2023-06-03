export function isValidLength(cardNumber: string) {
  const len = cardNumber.length;
  if (len < 13 || len > 16) {
    return false;
  }
  return true;
}

export function CardCheckr(cardNumber: number) {
  const cardNumberStr = String(cardNumber);
  if (!isValidLength(cardNumberStr)) {
    return false;
  }
  return true;
}
