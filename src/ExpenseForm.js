import React, { Component } from "react"

class ExpenseForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
          <div className="expense-form">
            <div>
              <h2>Expense Form</h2>
            </div>
            <div>
              <div className="expense-name">
                <label>Expense Name:</label>
                <div>
                  <input required
                    name="name"
                    type="text"
                    placeholder="Name Goes Here"
                    value={this.props.name}
                    onChange={this.props.handleChange}
                  ></input>
                </div>
              </div>
              <div className="expense-type">
                <label>Payment Method: </label>
                <select
                  name="type"
                  value={this.props.type}
                  onChange={this.props.handleChange} 
                >
                  <option value="cash">Cash</option>
                  <option value="check">Check</option>
                  <option value="credit-card">Credit Card</option>
                  <option value="debit-card">Debit Card</option>
                </select>
              </div>
              <div className="expense-date">
                <label>Transaction Date:</label>
                <div>
                  <input
                    name="date" type="date" value={this.props.date}
                    onChange={this.props.handleChange}
                  ></input>
                </div>
              </div>
              <div className="expense-amount">
                <label>Amount: </label>
                <div>
                  <input required
                    name="amount" type="number" value={this.props.amount}
                    onChange={this.props.handleChange}
                    placeholder="Amount Goes Here"
                  />
                </div>
              </div>
            </div>
            <div>
              <button className="expense-form-btn" type="submit" value="submit">
                Add Expense
              </button>
            </div>
          </div>
      </form>
    );
  }
}

export default ExpenseForm