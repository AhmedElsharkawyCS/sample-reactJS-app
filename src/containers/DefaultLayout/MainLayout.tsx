import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { AppHeader } from "../DefaultHeader";
import { AppDrawer } from "../DefaultSideMenu";
import { RoutesContainer } from "../DefaultRoutes";
import { CustomToolbar } from "../../shared";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      minWidth: 500,
      overflowX: "auto",
    },
  }),
);
export default function MainLayout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* header */}
      <AppHeader />
      {/* sidemenu */}
      <AppDrawer />
      {/* content */}
      <main className={classes.content}>
        <CustomToolbar />
        {/* app route container */}
        <RoutesContainer />
      </main>
    </div>
  );
}
