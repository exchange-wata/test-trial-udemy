export const ERROR_MESSAGE_FOR_DIVIDE = '0で割ることはできません';

export const divide = (dividend: number, divisor: number) => {
  if (divisor === 0) throw new Error(ERROR_MESSAGE_FOR_DIVIDE);
  return dividend / divisor;
};
