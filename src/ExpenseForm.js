import React, { Component } from "react";
import ExpenseName from './expense-form/ExpenseName'
import ExpenseType from './expense-form/ExpenseType'
import ExpenseDate from './expense-form/ExpenseDate'
import ExpenseAmount from './expense-form/ExpenseAmount'
import ExpenseTable from './ExpenseTable'
import { Button } from "react-bootstrap";

export class ExpenseForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    alert("submitted!")
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card text-white bg-dark border-secondary">
              <div className="card-header text-center">Expense Form</div>
              <ExpenseName />
              <ExpenseType />
              <ExpenseDate />
              <ExpenseAmount />
              <div>
                <Button block
                  variant="outline-success"
                  type="submit"
                  onSubmit={this.handleSubmit}
                >
                  Add Expense
                </Button>
              </div>
            </div>
          </div>
          <ExpenseTable />
        </div>
      </div>
    );
  }
}

export default ExpenseForm
