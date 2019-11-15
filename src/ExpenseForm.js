import React, { Component } from "react"

class ExpenseForm extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      type: "",
      date: "",
      amount: ""
    };
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange= e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    alert("expense btn works!");
    console.log(
      `${this.state.name} ${this.state.type} ${this.state.date} ${this.state.amount}`
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="expense-form">
            <div>
              <h2>Expense Form</h2>
            </div>
            <div>
              <div className="expense-name">
                <label>Expense Name:</label>
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name Goes Here"
                    value={this.state.name}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="expense-type">
                <label>Payment Method: </label>
                <select
                  name="type"
                  value={this.state.type}
                  onChange={this.handleChange}
                >
                  <option value="card">Card</option>
                  <option value="cash">Cash</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="expense-date">
                <label>Transaction Date:</label>
                <div>
                  <input
                    name="date"
                    type="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="expense-amount">
                <label>Amount: </label>
                <div>
                  <input
                    name="amount"
                    type="number"
                    value={this.state.amount}
                    onChange={this.handleChange}
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
          <div className="expense-table">
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
                <tbody>
                  <tr>
                    <td>
                      <i className="fad fa-credit-card"></i>
                    </td>
                    <td>Lunch</td>
                    <td>11/10/2019</td>
                    <td>$50.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default ExpenseForm