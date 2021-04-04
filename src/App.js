import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import Header from "./Header";

const App = () => {
  const [inputs, setInputs] = useState({
    name: "",
    type: "",
    amount: "",
    date: "",
  });

  const [expense, setExpense] = useState([]);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { ...inputs };
    setExpense([...expense, newExpense]);
  };

  return (
    <>
      <Header />
      <ExpenseForm
        inputs={inputs}
        submit={handleSubmit}
        change={handleChange}
      />
      <ExpenseTable />
    </>
  );
};

export default App;
