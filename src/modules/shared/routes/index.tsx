import {BrowserRouter, Route, Routes} from "react-router-dom" 
import { LoginPage } from "../../login/page";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}