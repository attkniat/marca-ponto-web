import { RouterProvider } from "react-router-dom";
import { Providers } from "./modules/shared/providers";
import { router } from "./modules/shared/routes/router";

export default function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}