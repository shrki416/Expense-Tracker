import React from 'react';
import './App.css';
import ExpenseTracker from './ExpenseTracker';

function App() {
  return (
    <>
      <ExpenseTracker />

      <div>
        <label for="transaction-type">Type:</label>
        <select name="type" id="transaction-type">
          <option value="">transaction type</option>
          <option value="card">Card</option>
          <option value="cash">Cash</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label for="expense">
          Expense:
          <input type="text" placeholder="Enter Expense"></input>
        </label>
      </div>

      <div>
        <label for="date">
          Date:
          <input type="date"></input>
        </label>
      </div>

      <div>
        <label for="amount">
          Amount:
          <input type="text" placeholder="How much did you spend"></input>
        </label>
      </div>

      <div>
        <button type="submit" name="add-expense">
          Add Expense
        </button>
      </div>
    </>
  );
}

export default App;
