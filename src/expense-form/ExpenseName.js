import React, { Component } from 'react'

export class ExpenseName extends Component {
    constructor(props) {
        console.log(props)
      super(props)
    
        this.state = {
            name: ''
        }
    }

    handleExpenseNameChange = (e) => {
        this.setState({
          name: e.target.value
        })
    }
    
    render() {
        return (
          <>
            <div className="expense-name">
              <label>Expense Name:</label>
              <div>
                <input
                  type="text"
                  placeholder="Name Goes Here"
                  value={this.state.name}
                  onChange={this.handleExpenseNameChange}>
                </input>
              </div>
            </div>
          </>
        );
    }
}

export default ExpenseName
