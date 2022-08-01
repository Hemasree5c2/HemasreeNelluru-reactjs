import React from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

export interface TextfieldProps {
  placeholder?: string;
  multiline?: boolean;
  handleChange: (
    // eslint-disable-next-line no-unused-vars
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => any;
  value?: string | number;
  name?: string;
  error?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: "8px",
  },
  noBorder: {
    border: "none",
  },
}));

const Textfield: React.FC<TextfieldProps> = ({
  placeholder,
  multiline,
  handleChange,
  value,
  name,
  error,
  ...restProps
}) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth variant="outlined" className={classes.root}>
      <TextField
        id="outlined-multiline-flexible"
        placeholder={placeholder}
        multiline={multiline}
        minRows={4}
        name={name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        value={value}
        InputProps={{
          style: { color: error ? "red" : "black" },
          classes: { notchedOutline: classes.noBorder },
        }}
        {...restProps}
      />
    </FormControl>
  );
};

export default Textfield;
