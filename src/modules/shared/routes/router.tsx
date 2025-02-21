import { createBrowserRouter } from "react-router-dom"
import { LoginPage } from "../../login/page/LoginPage";
import { HomePage } from "../../home/page";
import { routes } from "./routes";

export const router = createBrowserRouter([
  {
    path: routes.root.path,
    element: <HomePage />
    // children: [
    //   { index: true, element: <XXXXXX /> },
    // ],
  },
  {
    path: routes.auth.path,
    // element: <AuthLayout />,
    element: <LoginPage />,
    // children: [
    // {
    //   path: routes.auth.children.login.path,
    //   element: <LoginPage />,
    // },
    // {
    //   path: routes.auth.children.register.path,
    //   element: <RegisterPage />,
    // },
    // ],
  },
]
);