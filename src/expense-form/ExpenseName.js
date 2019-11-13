import React, { Component } from 'react'

export class ExpenseName extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            expenseName: ''
        }
    }

    handleExpenseNameChange = (e) => {
        this.setState({
            expenseName: e.target.value
        })
    }
    
    render() {
        return (
          <div>
            <div className="card-body">
              <label>Expense Name:</label>
              <div>
                <input
                  type="text"
                  placeholder="Your Expense Name Goes Here"
                  value={this.state.expenseName}
                  onChange={this.handleExpenseNameChange}>
                </input>
              </div>
            </div>
          </div>
        );
    }
}

export default ExpenseName
