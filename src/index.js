import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterFormPage } from "./pages/RegisterFormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    registro: "register",
    element: <RegisterFormPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
