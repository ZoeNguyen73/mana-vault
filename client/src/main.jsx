import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import { ErrorHandlerProvider } from "./context/ErrorHandlerProvider.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorHandlerProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorHandlerProvider>
    </BrowserRouter>
  </StrictMode>
);
