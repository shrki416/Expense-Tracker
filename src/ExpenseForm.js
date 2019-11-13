import React, { Component } from "react";
import ExpenseName from './expense-form/ExpenseName'
import ExpenseType from './expense-form/ExpenseType'
import ExpenseDate from './expense-form/ExpenseDate'
import ExpenseAmount from './expense-form/ExpenseAmount'
import ExpenseTable from './ExpenseTable'

export class ExpenseForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    alert("submitted!")
  }

  render() {
    return (
      <div className="container card-header">
        <div>
          <div>
            <h2>Expense Form</h2>
          </div>
          <div>
            <ExpenseName />
            <ExpenseType />
            <ExpenseDate />
            <ExpenseAmount />
          </div>
          <div>
            <button type="submit" onChange={this.handleSubmit}>Add Expense</button>
          </div>
        </div>
        <div>
          <ExpenseTable />
        </div>
      </div>
    );
  }
}

export default ExpenseForm
