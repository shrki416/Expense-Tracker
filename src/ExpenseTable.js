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
  makeStyles,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles({
  root: {
    marginTop: "2em",
  },
});

function ExpenseTable({ items, deleteItem, checkedItem }) {
  const classes = useStyles();

  const formatAmount = (amount) => parseFloat(amount).toFixed(2);
  const formatDate = (date) => {
    const newDate = new Date(date.replace(/-/g, "/"));
    return new Intl.DateTimeFormat("en-US").format(newDate);
    // return newDate.toLocaleDateString("en-US");
  };

  const rows = items.map(({ name, type, date, amount, checked }, index) => (
    <TableRow key={`${name}_${index}`}>
      <TableCell>
        <Checkbox
          checked={checked}
          color="primary"
          checkedIcon={<DeleteIcon />}
          icon={<SaveIcon />}
          inputProps={{ "aria-label": "secondary checkbox" }}
          onChange={() => checkedItem(index)}
        />
      </TableCell>
      <TableCell> {type} </TableCell>
      <TableCell> {name} </TableCell>
      <TableCell> {formatDate(date)} </TableCell>
      <TableCell> ${formatAmount(amount)} </TableCell>
    </TableRow>
  ));

  return (
    <TableContainer>
      <Typography variant="h5">Expense Table</Typography>
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
        className={classes.root}
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
