const MONTHS_IN_YEAR = 12;

const calculateMonthlyPayment = (amount, interest, months) => {
  const interestPerMonth = interest/100/MONTHS_IN_YEAR;

  const perMonth = amount * (interestPerMonth * Math.pow(1 + interestPerMonth, months)) / (Math.pow(1 + interestPerMonth, months) - 1);

  return perMonth;
}

export {
  calculateMonthlyPayment
}