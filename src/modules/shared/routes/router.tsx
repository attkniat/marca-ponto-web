import { createBrowserRouter } from "react-router-dom"
import { LoginPage } from "../../login/page/LoginPage";
import { HomePage } from "../../home/page";
import { routes } from "./routes";
import { AuthLayout } from "../../../Layouts/auth";
import { RootLayout } from "../../../Layouts/auth/root";

export const router = createBrowserRouter([
  {
    path: routes.root.path,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
  {
    path: routes.auth.path,
    element: <AuthLayout />,
    // element: <LoginPage />,
    children: [
      {
        path: routes.auth.children.login.path,
        element: <LoginPage />,
      },
      // {
      //   path: routes.auth.children.register.path,
      //   element: <RegisterPage />,
      // },
    ],
  },
]
);