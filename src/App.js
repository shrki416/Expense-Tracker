import React, { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import Header from "./Header";
import { Container } from "@material-ui/core";
import "./App.css";

const App = () => {
  const [inputs, setInputs] = useState({
    name: "",
    type: "",
    date: "",
    amount: "",
  });

  const ALL_EXPENSES = localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses"))
    : [];

  const [expense, setExpense] = useState(ALL_EXPENSES);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { ...inputs };
    setExpense([...expense, newExpense]);
    setInputs({
      name: "",
      type: "",
      date: "",
      amount: "",
    });
    localStorage.setItem("expenses", JSON.stringify(expense));
  };

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCheck = (index) => {
    const items = [...expense];
    const item = items[index];
    item.check = !item.check;
  };

  const deleteExpense = () => {
    const newExpenseList = expense.filter((expense) => !expense.check);
    setExpense(newExpenseList);
  };

  useEffect(() => {
    const expenses = JSON.parse(localStorage.getItem("expenses"));
    expenses && setExpense(expenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expense));
  }, [expense]);

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header />
        <ExpenseForm submit={handleSubmit} inputs={inputs} change={onChange} />
        <ExpenseTable
          items={expense}
          checkedItem={handleCheck}
          deleteItem={deleteExpense}
        />
      </Container>
    </div>
  );
};

export default App;
