using Microsoft.EntityFrameworkCore;

namespace loan_calculator.Models {
  public class LoanContext : DbContext {
    public LoanContext(DbContextOptions<LoanContext> options) : base(options) {

    }

    public DbSet<Loan> Loans { get; set; }
  }
}