import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export interface DropDownProps {
  options?: object[];
  // eslint-disable-next-line no-unused-vars
  onChange: (event: any, value: any) => void;
  placeholder?: string;
  value?: any;
  name?: string;
}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: "8px",
  },
  noBorder: {
    border: "none",
  },
}));

const DropDown: React.FC<DropDownProps> = ({
  options,
  onChange,
  placeholder,
  value,
  name,
}) => {
  const classes = useStyles();
  return (
    <Autocomplete
      id="combo-box-demo"
      disableClearable
      options={options ?? []}
      getOptionLabel={(option: any) => option?.name ?? ""}
      onChange={onChange}
      className={classes.root}
      value={value}
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          variant="outlined"
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            classes: { notchedOutline: classes.noBorder },
          }}
        />
      )}
    />
  );
};

export default DropDown;
