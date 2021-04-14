import React from "react";
import { Button, TextField, Grid, makeStyles } from "@material-ui/core";
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
    <Grid container justify="space-around">
      <form onSubmit={submit} className={classes.root}>
        <div flexDirection="row">
          <div>
            <h2>Expense Form</h2>
          </div>
          <div>
            <div>
              <TextField
                id="outlined-basic"
                label="Expense Name"
                variant="outlined"
                name="name"
                type="text"
                value={name}
                onChange={(e) => change(e)}
                required="required"
                size="small"
              />
            </div>
            <div>
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
            </div>
            <div>
              <label>Transaction Date:</label>
              <div>
                <input
                  required="required"
                  name="date"
                  type="date"
                  value={date}
                  onChange={(e) => change(e)}
                />
              </div>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Expense Amount"
                variant="outlined"
                name="amount"
                type="number"
                value={amount}
                onChange={(e) => change(e)}
                required="required"
                size="small"
              />
            </div>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<SendIcon />}
            >
              Add Expense
            </Button>
          </div>
        </div>
      </form>
    </Grid>
  );
};

export default ExpenseForm;
