import React, { Component } from 'react'

export class ExpenseType extends Component {
  render() {
    return (
      <div className="expense-type">
        <label>Payment Method: </label>

        <select name="type" id="transaction-type">
          <option value="card">Card</option>
          <option value="cash">Cash</option>
          <option value="other">Other</option>
        </select>
      </div>
    );
  }
}

export default ExpenseType

