import calculateCashback from '../cashback';

test('cashback at sum: 500', () => {
  const result = calculateCashback(100000);
  expect(result).toBe(5000);
});

test.each([
  ['gold', 100000, 5000],
  ['silver', 10000, 200],
  ['regular', 1000, 10],
  ['no', 500, 0],
])('testing cashback function with %s status and %i amount', (status, amount, expected) => {
  const result = calculateCashback(amount);
  expect(result).toBe(expected);
});
