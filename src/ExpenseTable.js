import React from "react";

class Table extends React.Component {
  createItemRows() {
    return this.props.items.map((item, index) => {
        return (
          <tr key={item.name + "_" + index}>
            <td>
              <input
                type="checkbox"
                checked={this.props.checked}
                onChange={this.props.checkedItem.bind(this, index)}
              />
            </td>
            <td> {item.type} </td>
            <td> {item.name} </td>
            <td> {item.date} </td>
            <td> ${item.amount} </td>
          </tr>
        );
      });
  }
  
  render() {
    return (
      <div className="expense-table">
        <h2>Expense Table</h2>
        <table>
          <tbody>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Type</th>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
            {this.createItemRows()}
          </tbody>
        </table>
        <button
          className="expense-form-btn"
          type="button"
          value="submit"
          onClick={this.props.deleteItem}
        >
          Delete Expense
        </button>
      </div>
    );
  }
}

export default Table;