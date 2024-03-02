import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#cc005f",
      light: "#fafaff",
      dark: "#2a3b47",
      contrastText: "#fafaff",
      text: "#697477",
      bglayer: "#f0f0f0",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
