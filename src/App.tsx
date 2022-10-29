import { AppProvider } from "./modules/shared/providers";
import { AppRoutes } from "./modules/shared/routes";

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}