import {BrowserRouter, Route, Routes} from "react-router-dom" 
import { LoginPage } from "../../login/page";
import { HomePage } from "../../home/page";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}