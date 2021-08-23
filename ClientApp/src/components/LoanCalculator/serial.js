import React from "react";
import { calculateMonthlyPaymentSerial } from "../../utils/loan";

const serial = ({ amount, interest, months }) => {
  const payments = calculateMonthlyPaymentSerial(amount, interest, months);
  const graph = [];
  const basePerMonth = amount / months;

  for (let i = 0; i < months; i++) {
    let interestAmount = payments[i] - basePerMonth;

    graph.push(
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{basePerMonth.toFixed(2)}</td>
        <td>{interestAmount.toFixed(2)}</td>
        <td>{payments[i].toFixed(2)}</td>
      </tr>
    );
  }

  return (
    <>
      <div>
        Total cost: {payments.reduce((prev, curr) => prev + curr).toFixed(2)}$
      </div>
      <div>
        Payment per month:
        <table class="table">
          <tbody>
            <tr>
              <th>Month</th>
              <th>Base Payment</th>
              <th>Interest</th>
              <th>Sum this month</th>
            </tr>
            {graph}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default serial;
