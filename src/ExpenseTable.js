import React from "react";

function ExpenseTable({ items, deleteItem, checkedItem }) {
  const formatDate = (date) => {
    const newDate = new Date(date);
    return Intl.DateTimeFormat("en-US").format(newDate);
  };

  const formatAmount = (amount) => (amount = parseFloat(amount).toFixed(2));

  const rows = items.map(({ name, type, date, amount, checked }, index) => (
    <tr key={`${name}_${index}`}>
      <td>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => checkedItem(index)}
        />
      </td>
      <td> {type} </td>
      <td> {name} </td>
      <td> {formatDate(date)} </td>
      <td> $ {formatAmount(amount)} </td>
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
          {rows}
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
