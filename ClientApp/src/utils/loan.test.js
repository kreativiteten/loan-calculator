import { calculateMonthlyPaymentAmortized, calculateMonthlyPaymentSerial } from './loan';

// Reference values calculated using
// https://www.sactocu.org/Resources/Tools/Calculators/Calculate-your-monthly-fixed-rate-loan-payment

it("Calculates amortized loan payments correctly", () => {
  let perMonth = calculateMonthlyPaymentAmortized(10000, 5, 12);
  expect(perMonth.toFixed(2)).toEqual("856.07");
  perMonth = calculateMonthlyPaymentAmortized(10000, 5, 54);
  expect(perMonth.toFixed(2)).toEqual("207.18");
  perMonth = calculateMonthlyPaymentAmortized(83000, 16.4, 162);
  expect(perMonth.toFixed(2)).toEqual("1275.84");
})


// Simple logic dictates what the results should be

it("Calculates serial loan payments correctly", () => {
  let sum = 200000;
  let interest = 7;
  let months = 24;
  let paymentsPerYear = 12;
  let payments = calculateMonthlyPaymentSerial(sum, interest, months);

  // Base payment is sum/months, as interest and charges are paid each month on top.
  let basePayment = sum/months;
  
  // Add interest for the initial sum, as no payments have been made
  let firstMonthInterest = (sum / 100) * (interest/paymentsPerYear);
  expect(payments[0]).toEqual(basePayment + firstMonthInterest);

  // Interest for the final sum, which is just the base payment as that is all that is remaining
  let lastMonthInterest = basePayment / 100 * (interest/paymentsPerYear);
  expect(payments[months-1]).toEqual(basePayment + lastMonthInterest);
});