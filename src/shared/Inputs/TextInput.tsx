import React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

interface IProps {}
export default function TextInput(props: IProps & TextFieldProps) {
  return (
    <TextField
      className={props.className}
      fullWidth
      id={props.name || Math.random().toString()}
      label={props.placeholder || "label"}
      name={props.name || "name"}
      autoComplete={props.name}
      autoFocus
      {...props}
    />
  );
}
