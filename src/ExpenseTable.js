import React from 'react'
import ExpenseItem from './expense-form/ExpenseItem'

export default function ExpenseTable() {
    return (
      <div className="col-8">
        <table className="table table-sm table-striped table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <ExpenseItem />
          <ExpenseItem />
          <ExpenseItem />
        </table>
      </div>
    );
}
