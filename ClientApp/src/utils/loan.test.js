import { calculateMonthlyPayment } from './loan';

// Reference values calculated using
// https://www.sactocu.org/Resources/Tools/Calculators/Calculate-your-monthly-fixed-rate-loan-payment

it("Calculates loan payments correctly", () => {
  let perMonth = calculateMonthlyPayment(10000, 5, 12);
  expect(perMonth.toFixed(2)).toEqual("856.07");
  perMonth = calculateMonthlyPayment(10000, 5, 54);
  expect(perMonth.toFixed(2)).toEqual("207.18");
  perMonth = calculateMonthlyPayment(83000, 16.4, 162);
  expect(perMonth.toFixed(2)).toEqual("1275.84");
})