import React, { useState, useEffect } from "react";
import LoanCalculator from "./LoanCalculator";

const Home = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLoans() {
      const response = await fetch("/api/loan");
      const data = await response.json();
      setLoans(data);
      setLoading(false);
    }
    fetchLoans();
  }, []);

  return (
    <div>
      {loading ? "Loading..." : null}
      <LoanCalculator loans={loans} />
    </div>
  );
};

export default Home;
