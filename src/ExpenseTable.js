import React from 'react'
import ExpenseItem from './expense-form/ExpenseItem'


export default function ExpenseTable() {
    return (
      <div>
        <h2>Expense Table</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <ExpenseItem />
          <ExpenseItem />
          <ExpenseItem />
        </table>
      </div>
    );
}
