import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RegisterFormPage } from "./pages/RegisterFormPage";

import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { AuthContextProviderComponent } from "./context/AuthContext";
import { UserPage } from "./pages/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <RegisterFormPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProviderComponent>
      <RouterProvider router={router} />
    </AuthContextProviderComponent>
  </React.StrictMode>
);
