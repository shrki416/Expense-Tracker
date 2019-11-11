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
                    <div className="form-group">
                        <label>Expense Name:</label>
                        <input type="text" className="form-control" 
                            placeholder="Your Expense Name Goes Here" 
                            value={this.state.expenseName}
                            onChange={this.handleExpenseNameChange} >
                        </input>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpenseName
