import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginFormPage } from "./pages/LoginFormPage";
import { RegisterFormPage } from "./pages/RegisterFormPage";
import { UserProfile } from "./pages/UserProfile";
import { AuthProvider } from "./context/AuthProvider";

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
        element: <LoginFormPage />,
      },
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
