import React, { useState } from "react";

const ExpenseForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    type: "",
    amount: "",
    date: "",
  });

  const [items, setItems] = useState([]);

  const { name, type, amount, date } = inputs;

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems({ ...inputs });

    console.log(items);
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
                onChange={(e) => handleChange(e)}
                required="required"
              />
            </div>
          </div>
          <div className="expense-type">
            <label>Payment Method: </label>
            <select
              required="required"
              name="type"
              value={type}
              onChange={(e) => handleChange(e)}
            >
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
                required="required"
                name="date"
                type="date"
                value={date}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="expense-amount">
            <label>Amount: </label>
            <div>
              <input
                required="required"
                name="amount"
                type="number"
                value={amount}
                onChange={(e) => handleChange(e)}
                placeholder="Amount Goes Here"
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
