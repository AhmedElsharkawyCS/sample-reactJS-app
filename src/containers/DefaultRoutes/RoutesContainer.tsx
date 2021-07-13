import React from "react";
import { Switch, Route } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { routes } from "../../routes";
import { HEADER_HEIGHT } from "../../constants";
import { PropagateLoader } from "../../shared";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "30px 60px 50px 60px",
      height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    },
  }),
);

export default function RoutesContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Switch>
        <React.Suspense fallback={<PropagateLoader />}>
          {routes.map((route, idx) => {
            return <Route {...route} key={idx} />;
          })}
        </React.Suspense>
      </Switch>
    </div>
  );
}
