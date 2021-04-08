import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import Header from "./Header";

const App = () => {
  const [inputs, setInputs] = useState({
    name: "",
    type: "",
    date: "",
    amount: "",
  });

  const [expense, setExpense] = useState([]);
  const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { ...inputs };
    setExpense([...expense, newExpense]);
  };

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCheck = (index) => {
    const items = [...expense];
    const item = items[index];
    item.check = !item.check;
    setCheck({ items });
  };

  const deleteExpense = () => {
    console.log(`delete`);
  };

  return (
    <>
      <Header />
      <ExpenseForm submit={handleSubmit} inputs={inputs} change={onChange} />
      <ExpenseTable
        items={expense}
        checkedItem={handleCheck}
        deleteItem={deleteExpense}
      />
    </>
  );
};

export default App;
