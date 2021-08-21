using System.Collections.Generic;

namespace loan_calculator.Models {
  public class Loan {
    public long Id { get; set; }
    public string IconUrl { get; set; }
    public string Name { get; set; }
    public double Interest { get; set; }
    public HashSet<LoanTypeItem> EligibleLoanTypes { get; set; }
    
    public int DefaultMonths { get; set; } 
    public int MinMonths { get; set; } 
    public int MaxMonths { get; set; }
    public int MonthStep { get; set; }
    public int DefaultAmount { get; set; } 
    public int MinAmount { get; set; }
    public int MaxAmount { get; set; }
    public int AmountStep { get; set; }
  }
  public class LoanDTO {
    public long Id { get; set; }
    public string IconUrl { get; set; }
    public string Name { get; set; }
    public double Interest { get; set; }
    public HashSet<LoanTypeDTO> EligibleLoanTypes { get; set; }
    
    public int DefaultMonths { get; set; } 
    public int MinMonths { get; set; } 
    public int MaxMonths { get; set; }
    public int MonthStep { get; set; }
    public int DefaultAmount { get; set; } 
    public int MinAmount { get; set; }
    public int MaxAmount { get; set; }
    public int AmountStep { get; set; }

    public LoanDTO(Loan loan) {
      this.Id = loan.Id;
      this.IconUrl = loan.IconUrl;
      this.Name = loan.Name;
      this.Interest = loan.Interest;
      
      HashSet<LoanTypeDTO> loanTypeDTOs = new HashSet<LoanTypeDTO>();
      foreach(LoanTypeItem l in loan.EligibleLoanTypes) {
        loanTypeDTOs.Add(new LoanTypeDTO{
          Id = l.Id,
          Name = l.Name,
          EligibleLoanType = l.EligibleLoanType
        });
      }

      this.EligibleLoanTypes = loanTypeDTOs;
      this.DefaultMonths = loan.DefaultMonths;
      this.MinMonths = loan.MinMonths;
      this.MaxMonths = loan.MaxMonths;
      this.MonthStep = loan.MonthStep;
      this.DefaultAmount = loan.DefaultAmount;
      this.MinAmount = loan.MinAmount;
      this.MaxAmount = loan.MaxAmount;
      this.AmountStep = loan.AmountStep;
    }
  }
}