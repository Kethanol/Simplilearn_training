import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import SignUpContainer from "./Components/SignUp/SignUpContainer";
import LoginContainer from "./Components/Login/LoginContainer";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider as StoreProvider } from "react-redux";
import reducers from "./reducers";
import MedicinesContainer from "./Components/Medicines/MedicinesContainer";

var composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
var router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginContainer />,
  },
  {
    path: "/sign-up",
    element: <SignUpContainer />,
  },
  {
    path: "/",
    element: <Navigate to="/login" />,
    errorElement: <div>404, page not found!</div>,
  },
  {
    path: "/medicines",
    element: <MedicinesContainer />,
  },
]);

var theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: "62.5%",
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ChakraProvider>
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
