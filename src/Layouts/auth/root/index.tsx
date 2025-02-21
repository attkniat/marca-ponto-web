import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../modules/login/contexts/auth";
import { routes } from "../../../modules/shared/routes/routes";

export function RootLayout() {
    const { isLogged } = useAuthContext();

    if (!isLogged) {
        return <Navigate to={routes.auth.children.login.route} />
    }

    return (
        <Outlet />
    );
}