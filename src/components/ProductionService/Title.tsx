import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

interface IProps {
  children: any;
}
const useStyles = makeStyles({
  root: {},
  title: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 1.27,
  },
});
export default function Title(props: IProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h3' gutterBottom className={classes.title}>
        {props.children}
      </Typography>
    </div>
  );
}
