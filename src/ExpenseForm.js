import React, { Component } from "react";
import ExpenseName from './expense-form/ExpenseName'
import ExpenseType from './expense-form/ExpenseType'
import ExpenseDate from './expense-form/ExpenseDate'
import ExpenseAmount from './expense-form/ExpenseAmount'
import ExpenseTable from './ExpenseTable'

export class ExpenseForm extends Component {
  constructor(props){
    console.log(props)
    super()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert("expense btn works!")
    console.log("name: ", this.name)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="expense-form">
            <div>
              <h2>Expense Form</h2>
            </div>
            <div>
              <ExpenseName name={this.handleNameChange}/>
              <ExpenseType type={this.props.type}/>
              <ExpenseDate date={this.props.date}/>
              <ExpenseAmount amount={this.props.amount}/>
            </div>
            <div>
              <button className="expense-form-btn" type="submit" value="submit">
                Add Expense
              </button>
            </div>
          </div>
          <div className="expense-table">
            <ExpenseTable />
          </div>
        </div>
      </form>
    );
  }
}

export default ExpenseForm
