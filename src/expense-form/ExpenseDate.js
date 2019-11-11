import React from 'react'

export default function ExpenseDate() {
    return (
      <div>
        <div className="card-body">
          <div className="form-group">
            <label>Transaction Date:</label>
            <input type="date" className="form-control"></input>
          </div>
        </div>
      </div>
    );
}
