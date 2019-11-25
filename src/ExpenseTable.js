import React from "react";

class Table extends React.Component {
  render() {
      const items = this.props.items;
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
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input
                      id={index}
                      type="checkbox"
                      checked={this.props.isCheckedToDelete}
                      onClick={this.props.checkedItem}
                    />
                  </td>
                  <td> {item.type} </td>
                  <td> {item.name} </td>
                  <td> {item.date} </td>
                  <td> ${item.amount} </td>
                </tr>
              );
            })}
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