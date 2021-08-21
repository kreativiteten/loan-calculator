# Loan Calculator

This is a simple loan calculator, although a full backend and react frontend is complete overkill for this app, it's made as per specifications to showcase programming abilities.

## Running the application

Assuming you have dotnet and node installed, run the following commands.
```
dotnet build
dotnet start
```
Then visit the page at [localhost:5001](https://localhost:5001).

## Summary

*Note: This is my first time utilizing C# for a web application, and as such, I have very likely not utilized it to it's fullest.*

The app was created utilizing the [dotnet react app template](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-5.0), which creates a project containing an api application along with a react frontend project.

![Screenshot of app](/readme_images/loancalculator.JPG)

![Diagram of setup](/readme_images/diagram.png)

### Backend

I have then implemented a simple API endpoint, which returns a list of available loan types with some metadata for extension. I utilize an in-memory database service, to make the project simpler to run. Having an api with a database makes it simple to connect the loans to some automatic process, or atleast an administrator dashboard, where they can edit the database entries which are utilized by the frontend when the interest or similar terms change.

### Frontend

The frontend is a simple react application, where the loan calculator exists. Inside `components/LoanCalculator` you will find the components utilized, along with `utils/loan.js` which contains the function which calculates the monthly payback. The formula used was one I found on several websites when looking into how loans are usually calculated, among others [this](https://www.kasasa.com/blog/how-to-calculate-loan-payments-in-3-easy-steps) web site contains the formula. The formula is also tested in `utils/loan.test.js` against values from an actual banks calculator, as describe in the test file.