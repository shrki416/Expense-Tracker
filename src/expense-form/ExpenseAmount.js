import React from 'react'

export default function ExpenseAmount() {
    return (
      <div>
        <div className="card-body">
          <div className="form-group">
            <label>Expense Amount:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Expense Amount Goes Here"
            ></input>
          </div>
        </div>
      </div>
    );
}
