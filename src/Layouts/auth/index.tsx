import { useAuthContext } from "../../modules/login/contexts/auth";
import { Navigate, Outlet } from "react-router-dom";

export function AuthLayout() {

    const { isLogged } = useAuthContext();

    if (!isLogged) {
        return <Navigate to='/tab' />;
    }

    return (
        <Outlet />
    );
}