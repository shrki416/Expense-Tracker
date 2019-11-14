import React, { Component } from 'react'

export class ExpenseAmount extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       expenseAmount: ''
    }
  }

  handleAmountChange = (e) => {
    this.setState({
      expenseAmount: e.target.value
    })
  }
  
  render() {
    return (
      <div className="expense-amount">
        <label>Amount: </label>
        <div>
          <input
            type="number"
            value={this.state.expenseAmount} 
            onChange={this.handleAmountChange} 
            placeholder="Amount Goes Here"/>
        </div>
      </div>
    );
  }
}

export default ExpenseAmount
