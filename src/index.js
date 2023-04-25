import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RegisterFormPage } from "./pages/RegisterFormPage";

import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import {
  AuthContext,
  AuthContextProviderComponent,
} from "./context/AuthContext";
import { UserPage } from "./pages/UserPage";
import { FolderPage } from "./pages/FolderPage";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token) return <Navigate to="/login" />;

  return children;
};

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
        element: (
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        ),
      },
      {
        path: "user",
        element: (
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        ),
      },

      {
        path: "folders/:idFolder",
        element: (
          <PrivateRoute>
            <FolderPage />
          </PrivateRoute>
        ),
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
