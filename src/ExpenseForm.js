import React from 'react'

export default function ExpenseForm() {
    return (
      <div>
        <div className="container">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Transaction type
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href=".">
                Card
              </a>
              <a className="dropdown-item" href=".">
                Cash
              </a>
              <a className="dropdown-item" href=".">
                Other
              </a>
            </div>
          </div>

          <label for="expense">
            Expense:
            <input
              className="form-control"
              type="text"
              placeholder="Ex: Lunch"
            ></input>
          </label>

          <label for="date">
            Date:
            <input className="form-control" type="date"></input>
          </label>

          <label for="amount">
            Amount:
            <input
              className="form-control"
              type="text"
              placeholder="How much was spent?"
            ></input>
          </label>

          <div>
            <button type="submit" className="btn btn-primary">
              Add Expense
            </button>
          </div>
        </div>
      </div>
    );
}
