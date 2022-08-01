import React from "react";
import { Button as MuiButton, makeStyles, Typography } from "@material-ui/core";

export interface ButtonProps {
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
}

const useStyles = makeStyles({
  button: {
    borderRadius: "8px",
    background: "white",
    color: "black",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "11px",
    height: "45px",
    "&:hover": {
      boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
      backgroundColor: "white",
    },
  },
});

const Button: React.FC<ButtonProps> = ({
  disabled,
  label,
  onClick,
  ...restProps
}) => {
  const classes = useStyles();
  return (
    <MuiButton
      data-testid="button"
      className={classes.button}
      variant="contained"
      disabled={disabled}
      size="large"
      onClick={onClick}
      fullWidth
      {...restProps}
    >
      <Typography>{label}</Typography>
    </MuiButton>
  );
};

export default Button;
