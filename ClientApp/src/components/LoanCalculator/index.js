import React, { useState } from "react";
import Amortized from "./amortized";
import Serial from "./serial";
import LoanSelector from "./loanSelector";
import LoanTypeSelector from "./loanTypeSelector";
import { loanTypes } from "../../utils/loan";

const LoanCalculator = ({ loans }) => {
  const [loan, setLoan] = useState(null);
  const [amount, setAmount] = useState(5000);
  const [months, setMonths] = useState(5);
  const [loanMode, setLoanMode] = useState(0); // Which index of the EligibleLoanTypes array to use

  const updateSelectedLoan = (newLoanId) => {
    const newLoan = loans.find((l) => l.id === newLoanId);
    if (newLoan) {
      setLoanMode(0); // Reset to loan type 0
      setLoan(newLoan);
      setAmount(newLoan.defaultAmount);
      setMonths(newLoan.defaultMonths);
    } else {
      console.log("Invalid loan id submitted.");
    }
  };

  if (loan === null) {
    return (
      <div>
        <LoanSelector loans={loans} onLoanSelected={updateSelectedLoan} />
      </div>
    );
  }

  let paymentPlanComponent = null;
  if (loan.eligibleLoanTypes[loanMode].eligibleLoanType == loanTypes.AMORTIZED)
    paymentPlanComponent = (
      <Amortized amount={amount} interest={loan.interest} months={months} />
    );
  else if (
    loan.eligibleLoanTypes[loanMode].eligibleLoanType == loanTypes.SERIAL
  )
    paymentPlanComponent = (
      <Serial amount={amount} interest={loan.interest} months={months} />
    );
  else paymentPlanComponent = <div>Invalid payment plan.</div>;

  return (
    <>
      <div>
        <LoanSelector loans={loans} onLoanSelected={updateSelectedLoan} />
      </div>
      <div>
        <h1>LoanCalculator {loan.name}</h1>
        <div>
          <div>Amount: {amount}$</div>
          <input
            value={amount}
            type="range"
            step={loan.amountStep}
            min={loan.minAmount}
            max={loan.maxAmount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
        </div>
        <div>
          <div>Months: {months}</div>
          <input
            value={months}
            type="range"
            step={loan.monthStep}
            min={loan.minMonths}
            max={loan.maxMonths}
            onChange={(e) => setMonths(parseInt(e.target.value))}
          />
        </div>
        <div>Interest: {loan.interest}%</div>
        <div>
          <div>Payback scheme: {loan.eligibleLoanTypes[loanMode].name}</div>
          <LoanTypeSelector loan={loan} onLoanTypeSelected={setLoanMode} />
        </div>
        {paymentPlanComponent}
      </div>
    </>
  );
};

export default LoanCalculator;
