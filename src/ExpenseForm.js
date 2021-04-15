import React from "react";
import {
  Button,
  TextField,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
}));

const ExpenseForm = ({ inputs, change, submit }) => {
  const { name, amount, type, date } = inputs;

  const classes = useStyles();

  return (
    <form onSubmit={submit} className={classes.root}>
      <Typography variant="h5">Expense Form</Typography>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Expense Name"
            variant="outlined"
            name="name"
            type="text"
            value={name}
            onChange={(e) => change(e)}
            required
            size="small"
          />
        </Grid>

        <Grid item>
          <label>Payment Method: </label>

          <select
            required="required"
            name="type"
            value={type}
            onChange={(e) => change(e)}
          >
            <option value="cash">Cash</option>
            <option value="check">Check</option>
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
          </select>
        </Grid>

        <Grid item>
          <TextField
            variant="outlined"
            type="date"
            name="date"
            value={date}
            onChange={(e) => change(e)}
            required
            size="small"
          />
        </Grid>

        <Grid item>
          <TextField
            id="outlined-basic"
            label="Expense Amount"
            variant="outlined"
            name="amount"
            type="number"
            value={amount}
            onChange={(e) => change(e)}
            required
            size="small"
          />
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<SendIcon />}
          >
            Add Expense
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ExpenseForm;
