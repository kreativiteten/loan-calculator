using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using loan_calculator.Models;

namespace loan_calculator
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllersWithViews();

            services.AddDbContext<LoanContext>(opt => opt.UseInMemoryDatabase("LoanList"));

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                var serviceScopeFactory = app.ApplicationServices.GetService<IServiceScopeFactory>();
                using (IServiceScope scope = serviceScopeFactory.CreateScope())
                {
                    LoanContext loanContext = scope.ServiceProvider.GetService<LoanContext>();

                    Loan sampleMortgage = new Loan {
                        Name ="House", 
                        Interest = 3.5, 
                        IconUrl = "/icons/home.svg",
                        DefaultMonths = 120,
                        MinMonths = 6,
                        MaxMonths = 600,
                        MonthStep = 6,
                        DefaultAmount = 200000,
                        MinAmount = 50000,
                        MaxAmount = 500000,
                        AmountStep = 10000
                    };
                    Loan sampleCarLoan = new Loan {
                        Name ="Car", 
                        Interest = 7, 
                        IconUrl = "/icons/car.svg",
                        DefaultMonths = 60,
                        MinMonths = 6,
                        MaxMonths = 120,
                        MonthStep = 6,
                        DefaultAmount = 50000,
                        MinAmount = 1000,
                        MaxAmount = 200000,
                        AmountStep = 1000
                    };
                    
                    loanContext.Loans.Add(sampleMortgage);
                    loanContext.Loans.Add(sampleCarLoan);
                    loanContext.SaveChanges();

                    scope.Dispose();
                }

                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
