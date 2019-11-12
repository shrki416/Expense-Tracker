import React, { Component } from 'react'
import { InputGroup, FormControl} from 'react-bootstrap'

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
      <div>
        <div className="card-body">
          <div className="form-group">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl value={this.state.expenseAmount} onChange={this.handleAmountChange} placeholder="Your Expense Goes Here" aria-label="Amount" />
            </InputGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpenseAmount
