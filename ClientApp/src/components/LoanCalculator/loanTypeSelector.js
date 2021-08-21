import React from 'react';

const loanTypeSelector = ({loan, onLoanTypeSelected}) => {

  console.log("Loan type selector!");
  console.log(loan.eligibleLoanTypes);
  const loanTypeBtns = [];
  for(let i = 0; i < loan.eligibleLoanTypes.length; i++) {
    loanTypeBtns.push(<button type="button" className="btn btn-primary" key={loan.eligibleLoanTypes[i].id} onClick={() => onLoanTypeSelected(i)}>{loan.eligibleLoanTypes[i].name}</button>)
  }

  return(
    <>
    <div className="btn-group" role="group">
      { loanTypeBtns }
    </div>
    </>
  )

}

export default loanTypeSelector;