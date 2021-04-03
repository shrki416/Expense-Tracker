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

//   handleCheck = (index) => {
//     const items = [...this.state.items];
//     const item = items[index];
//     item.checked = !item.checked;
//     this.setState({ items: items });
//   };

//   deleteItem() {
//     const newItems = this.state.items.filter((item) => !item.checked);
//     this.setState({ items: newItems });
//   }

//   componentDidMount() {
//     const items = localStorage.getItem("items") || "[]";
//     this.setState({ items: JSON.parse(items) });
//   }

//   componentDidUpdate() {
//     localStorage.setItem("items", JSON.stringify(this.state.items));
//   }
