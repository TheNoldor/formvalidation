import React from "react";
import ReactDOM from "react-dom";
//import { Provider } from "react-redux";
//import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
//import { ThemeProvider } from "@mui/material";

ReactDOM.render(
  //<Provider >
  //<ThemeProvider>
  //<BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //</BrowserRouter>,
  //</ThemeProvider>
  //</Provider>
  document.getElementById("root")
);
