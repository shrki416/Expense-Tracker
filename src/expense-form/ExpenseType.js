import React, { Component } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export class ExpenseType extends Component {
  render() {
    return (
      <div>
        <div className="card-body">
          <DropdownButton 
              id="dropdown-item-button" 
              title="Transaction Type" 
              variant="secondary">
            <Dropdown.Item as="button">Cash</Dropdown.Item>
            <Dropdown.Item as="button">Card</Dropdown.Item>
            <Dropdown.Item as="button">Other</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default ExpenseType
