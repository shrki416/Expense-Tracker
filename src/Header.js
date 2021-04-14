import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function Header() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Expense Tracker</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
