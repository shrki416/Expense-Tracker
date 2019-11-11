import React from 'react'
import ExpenseName from './expense-form/ExpenseName'
import ExpenseType from './expense-form/ExpenseType'
import ExpenseDate from './expense-form/ExpenseDate'
import ExpenseAmount from './expense-form/ExpenseAmount'

export default function ExpenseForm() {
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
                <button className="btn btn-dark btn-block border-secondary" type="submit">Add Expense</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
