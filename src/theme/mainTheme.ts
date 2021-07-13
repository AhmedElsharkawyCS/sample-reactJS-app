import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { palette } from "./palette";
import { shadows } from "./shadows";

const theme = createTheme({
  palette,
  shadows,
});

export default responsiveFontSizes(theme);
