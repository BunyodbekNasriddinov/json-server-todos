import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/main.css";
import { TokenProvider } from "./context/TokenContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TokenProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </TokenProvider>
  </BrowserRouter>
);
