using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace loan_calculator.Models {
  public class LoanContext : DbContext {
    public LoanContext(DbContextOptions<LoanContext> options) : base(options) {

    }

    public DbSet<Loan> Loans { get; set; }
    public DbSet<LoanTypeItem> LoanTypeItems { get; set; }

    protected override void OnModelCreating(ModelBuilder builder) {
      
    }
  }
}