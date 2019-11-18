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
            {items.map(item => {
              return (
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td> {item.type} </td>
                  <td> {item.name} </td>
                  <td> {item.date} </td>
                  <td> $ {item.amount} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="expense-form-btn" type="submit" value="submit">
          Delete Expense
        </button>
      </div>
    );
  }
}

export default Table;
