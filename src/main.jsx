import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "../context/cartContext.jsx";
import { ThemeProvider } from "@material-tailwind/react";
// import '@coreui/coreui/dist/css/coreui.min.css'
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <CartProvider>
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </CartProvider>
);
