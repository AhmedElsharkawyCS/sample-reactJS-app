import React from "react";
import Toolbar, { ToolbarProps } from "@material-ui/core/Toolbar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { HEADER_HEIGHT } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      minHeight: HEADER_HEIGHT,
    },
  }),
);
interface IProps extends ToolbarProps {}
export default function ToolBar(props: IProps) {
  const classes = useStyles();
  return (
    <Toolbar classes={{ regular: classes.toolbar }} {...props}>
      {props.children}
    </Toolbar>
  );
}
