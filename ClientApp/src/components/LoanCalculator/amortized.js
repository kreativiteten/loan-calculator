import React from 'react';
import { calculateMonthlyPaymentAmortized } from '../../utils/loan';


const amortized = ({amount, interest, months}) => {
  
  const perMonth = calculateMonthlyPaymentAmortized(amount, interest, months);
  const graph = [];
  let debt = amount;
  for(let i = 0; i < months; i++) {
    debt += debt / 100 * (interest / 12);
    debt -= perMonth;

    graph.push(<div key={debt.toString() + i.toString()} className="bar">
      <div style={{flex: amount - debt, backgroundColor: "white"}}></div>
      <div style={{flex: debt, backgroundColor: "black"}}></div>
    </div>)
  }

  return (<>
    <div>
      Payment per month: { perMonth.toFixed(2) }$
    </div>
    <div>
      Total cost: { (perMonth * months).toFixed(2) }$
    </div>

    <div className="simple-graph">
      {graph}
    </div>
  </>)
}

export default amortized;