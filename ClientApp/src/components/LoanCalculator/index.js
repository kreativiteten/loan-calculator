import React, { useEffect, useState } from 'react';
import { calculateMonthlyPayment } from '../../utils/loan';
import LoanTypeSelector from './loanTypeSelector';

const LoanCalculator = ({loans}) => {

  const [loan, setLoan] = useState(null);
  const [amount, setAmount] = useState(5000);
  const [months, setMonths] = useState(5);


  const updateSelectedLoan = (newLoanId) => {
    const newLoan = loans.find(l => l.id == newLoanId);
    if(newLoan) {
      setLoan(newLoan);
      setAmount(newLoan.defaultAmount);
      setMonths(newLoan.defaultMonths);
    } else {
      console.log("Invalid loan id submitted.");
    }
  }

  if(loan === null) {
    return <div><LoanTypeSelector loans={loans} onLoanSelected={updateSelectedLoan} /></div>
  }
  
  
  const perMonth = calculateMonthlyPayment(amount, loan.interest, months);
  const graph = [];
  let debt = amount;
  for(let i = 0; i < months; i++) {
    debt += debt / 100 * (loan.interest / 12);
    debt -= perMonth;

    graph.push(<div key={debt.toString() + i.toString()} className="bar">
      <div style={{flex: amount - debt, backgroundColor: "white"}}></div>
      <div style={{flex: debt, backgroundColor: "black"}}></div>
    </div>)
  }

  return (<>
      <div><LoanTypeSelector loans={loans} onLoanSelected={updateSelectedLoan} /></div>
      <div>
        <h1>
          LoanCalculator { loan.name }
        </h1>
        <div>
          <div>
            Amount: {amount}$
          </div>
          <input value={amount} type="range" step={loan.amountStep} min={loan.minAmount} max={loan.maxAmount} onChange={(e) => setAmount(parseInt(e.target.value))} />
        </div>
        <div>
          <div>
            Months: {months}
            </div>
            <input value={months} type="range" step={loan.monthStep} min={loan.minMonths} max={loan.maxMonths} onChange={(e) => setMonths(parseInt(e.target.value))} />
        </div>
        <div>
          Interest: {loan.interest}%
        </div>
        <div>
          Payment per month: { perMonth.toFixed(2) }$
        </div>
        <div>
          Total cost: { (perMonth * months).toFixed(2) }$
        </div>

        <div className="simple-graph">
          {graph}
        </div>
      </div>
    </>);
}

export default LoanCalculator;