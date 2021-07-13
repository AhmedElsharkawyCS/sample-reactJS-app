import React from "react";
import { Tabs as CustomTabs } from "../../shared";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: { paddingTop: 23, width: "100%" },
});

export default function Tabs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CustomTabs tabs={[{ title: "Tab 01" }, { title: "Tab 02" }]} />
    </div>
  );
}
