import React from "react";

const loanSelector = ({ loans = [], onLoanSelected }) => {
  const loanBtns = [];
  for (let i = 0; i < loans.length; i++) {
    loanBtns.push(
      <button
        type="button"
        className="btn btn-primary loan-button"
        style={{ backgroundImage: `url(${loans[i].iconUrl})` }}
        key={loans[i].id}
        onClick={() => onLoanSelected(loans[i].id)}
      >
        {loans[i].name}
      </button>
    );
  }

  return (
    <>
      <div className="btn-group" role="group">
        {loanBtns}
      </div>
    </>
  );
};

export default loanSelector;
