import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from "react-router-dom";
import { Providers } from "./modules/shared/providers";
import { router } from "./modules/shared/routes/router";
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />
    </Providers>
  );
}