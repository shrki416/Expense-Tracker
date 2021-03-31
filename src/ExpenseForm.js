import React, { useState } from "react";

const ExpenseForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="expense-form">
        <div>
          <h2>Expense Form</h2>
        </div>
        <div>
          <div className="expense-name">
            <label>Expense Name:</label>
            <div>
              <input
                name="name"
                type="text"
                placeholder="Name Goes Here"
                value={name}
                // onChange={handleChange}
                onChange={(e) => setName(e.target.value)}
                // value={email}
                required="required"
                // type="email"
                // placeholder="Email"
              ></input>
            </div>
          </div>
          <div className="expense-type">
            <label>Payment Method: </label>
            <select name="type" value={type} onChange={handleChange}>
              <option value="cash">Cash</option>
              <option value="check">Check</option>
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
            </select>
          </div>
          <div className="expense-date">
            <label>Transaction Date:</label>
            <div>
              <input
                name="date"
                type="date"
                value={date}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="expense-amount">
            <label>Amount: </label>
            <div>
              <input
                required
                name="amount"
                type="number"
                value={amount}
                onChange={handleChange}
                placeholder="Amount Goes Here"
                step="0.01"
              />
            </div>
          </div>
        </div>
        <div>
          <button className="expense-form-btn" type="submit" value="submit">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
