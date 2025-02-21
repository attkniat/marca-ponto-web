import { createBrowserRouter } from "react-router-dom"
import { LoginPage } from "../../login/page/LoginPage";
import { HomePage } from "../../home/page";
import { routes } from "./routes";

export const router = createBrowserRouter([
  {
    path: routes.root.path,
    children: [
      { index: true, element: <HomePage /> },
    ]
  },
  {
    path: routes.auth.path,
    element: <LoginPage />,
    children: [
      { path: routes.auth.children.login.path, element: <LoginPage /> },
      // {
      //   path: routes.auth.children.register.path,
      //   element: <RegisterPage />,
      // },
    ],
  },
]
);