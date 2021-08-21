namespace loan_calculator.Models {
  public class Loan {
    public long Id { get; set; }
    public string IconUrl { get; set; }
    public string Name { get; set; }
    public double Interest { get; set; }
    
    public int DefaultMonths { get; set; } 
    public int MinMonths { get; set; } 
    public int MaxMonths { get; set; }
    public int MonthStep { get; set; }
    public int DefaultAmount { get; set; } 
    public int MinAmount { get; set; }
    public int MaxAmount { get; set; }
    public int AmountStep { get; set; }
  }
}