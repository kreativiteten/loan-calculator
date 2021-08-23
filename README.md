# Loan Calculator

This is a simple loan calculator.

## Running the application

Assuming you have dotnet and node installed, run the following commands.
```
dotnet build
dotnet run
```
Then visit the page at [localhost:5001](https://localhost:5001).

## Summary

*Note: This is my first time utilizing C# for a web application, and as such, I have very likely not utilized it to it's fullest.*

The app was created utilizing the [dotnet react app template](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-5.0), which creates a project containing an api application along with a react frontend project.

![Screenshot of app](/readme_images/screenshot.JPG)

![Diagram of setup](/readme_images/overview.png)

## Backend

I have then implemented a simple API endpoint, which returns a list of available loan types with some metadata for extension. I utilize an in-memory database service, to make the project simpler to run. Having an api with a database makes it simple to connect the loans to some automatic process, or atleast an administrator dashboard, where they can edit the database entries which are utilized by the frontend when the interest or similar terms change.

## Frontend

The frontend is a simple react application, where the loan calculator exists. Inside `components/LoanCalculator` you will find the components utilized, along with `utils/loan.js` which contains the function which calculates the monthly payback. 

### Loan Calculation

I have implemented two formulas, mainly due to my own initial confusion when looking into `series loan` on google, and the entire first page of results referring to `amortized loans`. I later learned about serial loans when comparing my results with the DNB calculator, and due to that also matching the description, but more closely matching in name, I figured this might be what you were initially looking for.

#### Amortized Loans

Amortized loans are where you pay back the same amount each month, and you add the generated interest onto your loan. The calculations can be found in `utils/loan.js`.

The formula used for calculating payments was one I found on several websites when looking into how loans are usually calculated, among others [this](https://www.kasasa.com/blog/how-to-calculate-loan-payments-in-3-easy-steps) web site contains the formula. The formula is also tested in `utils/loan.test.js` against values from an actual banks' calculator, as describe in the test file.

#### Serial Loans

Serial loans are where you pay back the same base amount every month, but pay back all interest (and charges) each month on top of that. Thus your payment will be loan amount divided by number of months, and then with the interest for your current month on top of that. The calculations can be found in `utils/loan.js`.

