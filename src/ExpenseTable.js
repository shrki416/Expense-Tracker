import React from 'react'
import ExpenseItem from './expense-form/ExpenseItem'
import { Table } from 'react-bootstrap'

export default function ExpenseTable() {
    return (
      <div className="col-8">
        <Table size="sm" striped bordered hover variant="dark">
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
        </Table>
      </div>
    );
}
