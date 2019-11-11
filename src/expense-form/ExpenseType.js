import React from 'react'

export default function ExpenseType() {
    return (
      <div>
        <div className="card-body">
            <label>Transaction Type:</label>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button" data-toggle="dropdown">
                Transaction Type
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" type="button">
                  Card
                </button>
                <button className="dropdown-item" type="button">
                  Cash
                </button>
                <button className="dropdown-item" type="button">
                  Other
                </button>
              </div>
            </div>
        </div>
      </div>
    );
}
