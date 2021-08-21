using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace loan_calculator.Models {
  public class LoanTypeItem {
    public long Id { get; set; }
    public string Name { get; set; }
    public LoanType EligibleLoanType { get; set; }
    
    public HashSet<Loan> Loans { get; set; }
  }

  public class LoanTypeDTO {
    public long Id { get; set; }
    public string Name { get; set; }
    public LoanType EligibleLoanType { get; set; }
  }
}