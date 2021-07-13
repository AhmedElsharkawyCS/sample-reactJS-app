import React, { ReactElement } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { mainTheme } from "./theme";
import { ToastContainer, PropagateLoader } from "./shared";
const AppContainer = React.lazy(() => import("./containers"));

export default function App(): ReactElement<any, any> {
  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <Switch>
          <React.Suspense fallback={<PropagateLoader />}>
            <Route key={"main-app"} component={AppContainer} />
          </React.Suspense>
        </Switch>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}
