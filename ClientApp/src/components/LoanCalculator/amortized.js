import React from "react";
import { calculateMonthlyPaymentAmortized } from "../../utils/loan";

const amortized = ({ amount, interest, months }) => {
  const perMonth = calculateMonthlyPaymentAmortized(amount, interest, months);
  return (
    <>
      <div>Payment per month: {perMonth.toFixed(2)}$</div>
      <div>Total cost: {(perMonth * months).toFixed(2)}$</div>
    </>
  );
};

export default amortized;
