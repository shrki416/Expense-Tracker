import React from "react";

function ExpenseTable({ items, deleteItem, checkedItem }) {
  const formatAmount = (amount) => (amount = parseFloat(amount).toFixed(2));
  const createItemRows = items.map((item, index) => (
    <tr key={item.name + "_" + index}>
      <td>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => checkedItem(index)}
        />
      </td>
      <td> {item.type} </td>
      <td> {item.name} </td>
      <td> {item.date} </td>
      <td> $ {formatAmount(item.amount)} </td>
    </tr>
  ));

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
          {createItemRows}
        </tbody>
      </table>
      <button
        className="expense-form-btn"
        type="button"
        value="submit"
        onClick={deleteItem}
      >
        Delete Expense
      </button>
    </div>
  );
}

export default ExpenseTable;
