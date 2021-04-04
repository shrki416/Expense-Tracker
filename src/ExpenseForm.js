import React from "react";

const ExpenseForm = ({ inputs, submit, change }) => {
  const { name, type, amount, date } = inputs;

  return (
    <form onSubmit={submit}>
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
                onChange={(e) => change(e)}
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
              onChange={(e) => change(e)}
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
                onChange={(e) => change(e)}
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
                onChange={(e) => change(e)}
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
