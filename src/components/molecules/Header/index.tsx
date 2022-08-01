import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    height: "60px",
    borderRadius: "8px",
    backgroundColor: "white",
    padding: "16px",
    marginTop: "2%",
    marginBottom: "2%",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <Typography>
          <b>UPayments Store</b>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <b>Register</b>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
