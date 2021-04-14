import { Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

function ExpenseTable({ items, deleteItem, checkedItem }) {
  const formatAmount = (amount) => parseFloat(amount).toFixed(2);

  const rows = items.map(({ name, type, date, amount, checked }, index) => (
    <tr key={`${name}_${index}`}>
      <td>
        {/* <input
          type="checkbox"
          checked={checked}
          onChange={() => checkedItem(index)}
        /> */}
        <Checkbox
          checked={checked}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          onChange={() => checkedItem(index)}
        />
      </td>
      <td> {type} </td>
      <td> {name} </td>
      <td> {date} </td>
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
              <Checkbox
                disabled
                checked
                inputProps={{ "aria-label": "disabled checked checkbox" }}
              />
            </th>
            <th>Type</th>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
          {rows}
        </tbody>
      </table>
      {/* <button
        className="expense-form-btn"
        type="button"
        value="submit"
        onClick={deleteItem}
      >
        Delete Expense
      </button> */}
      <Button
        variant="contained"
        color="secondary"
        onClick={deleteItem}
        type="button"
      >
        Delete Expense
      </Button>
    </div>
  );
}

export default ExpenseTable;
