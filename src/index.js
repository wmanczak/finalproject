import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./reduxRoot/ReduxStore";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const headerTheme = createMuiTheme({
  palette: {
    primary: {
      light: "rgba(162, 28, 88, 0.2)",
      main: "#A21C58",
      dark: "#71133d",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(116, 217, 189, 0.25)",
      main: "#74D9BD",
      dark: "#519784",
      contrastText: "#000",
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        fontSize: "16px",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={headerTheme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
