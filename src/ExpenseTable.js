import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function ExpenseTable({ items, deleteItem, checkedItem }) {
  const formatAmount = (amount) => parseFloat(amount).toFixed(2);

  const rows = items.map(({ name, type, date, amount, checked }, index) => (
    <TableRow key={`${name}_${index}`}>
      <TableCell>
        <Checkbox
          checked={checked}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          onChange={() => checkedItem(index)}
        />
      </TableCell>
      <TableCell> {type} </TableCell>
      <TableCell> {name} </TableCell>
      <TableCell> {date} </TableCell>
      <TableCell> ${formatAmount(amount)} </TableCell>
    </TableRow>
  ));

  return (
    <TableContainer>
      <h2>Expense Table</h2>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                disabled
                checked
                inputProps={{ "aria-label": "disabled checked checkbox" }}
              />
            </TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
      <Button
        variant="contained"
        color="secondary"
        onClick={deleteItem}
        type="button"
        startIcon={<DeleteIcon />}
      >
        Delete Expense
      </Button>
    </TableContainer>
  );
}

export default ExpenseTable;
