import { createBrowserRouter } from "react-router-dom"
import { LoginPage } from "../../login/page/LoginPage";
import { MarkPoint } from "../../home/components/MarkPoint";
import { routes } from "./routes";
import { RootLayout } from "../../../Layouts/auth/root";
import { PointsHistory } from "../../pointsHistory/page";
import { HomePage } from "../../home/page";

export const router = createBrowserRouter([
  {
    path: routes.root.path,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
    ],
    errorElement: <div>404 Not Found </div>
  },
  {
    path: routes.auth.path,
    // element: <AuthLayout />,
    element: <LoginPage />,
    // children: [
    //   {
    //     path: routes.auth.children.login.path,
    //     element: <LoginPage />,
    //   },
    // {
    //   path: routes.auth.children.register.path,
    //   element: <RegisterPage />,
    // },
    // ],
  },
  {
    path: routes.tab.path,
    // element: <AuthLayout />,
    element: <HomePage />,
    children: [
      {
        path: routes.tab.children.home.path,
        element: <MarkPoint />,
      },
      {
        path: routes.tab.children.point.path,
        element: <PointsHistory />,
      },
    ],
  },
]
);