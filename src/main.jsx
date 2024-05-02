import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";

import { MyContext } from "./myContext";

import { Routes } from "./routes";

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MyContext.Provider value={{name:'Dario Reis',email:'dario@email.com'}}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
