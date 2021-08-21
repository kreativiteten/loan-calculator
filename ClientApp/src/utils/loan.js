const MONTHS_IN_YEAR = 12;

const calculateMonthlyPaymentAmortized = (amount, interest, months) => {
  const interestPerMonth = interest/100/MONTHS_IN_YEAR;

  const perMonth = amount * (interestPerMonth * Math.pow(1 + interestPerMonth, months)) / (Math.pow(1 + interestPerMonth, months) - 1);

  return perMonth;
}

const calculateMonthlyPaymentSerial = (amount, interest, months) => {
  const interestPerMonth = interest/100/MONTHS_IN_YEAR;

  const baseMonthlyPay = amount/months;
  let remaining = amount;
  const payments = [];
  for(let i = 0; i < months; i++) {
    let interestThisMonth = remaining * interestPerMonth;

    payments.push(baseMonthlyPay + interestThisMonth);

    remaining -= baseMonthlyPay;
  }

  return payments;
}

const loanTypes = {
  AMORTIZED: 0,
  SERIAL: 1
}

export {
  calculateMonthlyPaymentAmortized,
  calculateMonthlyPaymentSerial,
  loanTypes
}