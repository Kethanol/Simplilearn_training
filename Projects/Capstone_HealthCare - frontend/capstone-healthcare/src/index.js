import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import SignUpContainer from "./Components/SignUp/SignUpContainer";
import LoginContainer from "./Components/Login/LoginContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
var router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginContainer name={"Denis"} />,
  },
  {
    path: "/sign-up",
    element: <SignUpContainer name={"Denis"} />,
  },
  {
    path: "/",
    element: <Navigate to="/login" />,
    errorElement: <div>404, page not found!</div>,
  },
]);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
