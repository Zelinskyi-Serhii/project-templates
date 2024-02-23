import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { Count } from "@/pages/count";
import { Login } from "@/pages/login";
import { useAuth } from "@/hooks/useAuth";

const ProtectedRoute = () => {
  const { token, user } = useAuth();

  if (!token || !user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export const Routes = () => {
  const { token, user } = useAuth();
  const isAutorized = token && user;

  // Routes which are available only without authorization
  const publicRoutes = [
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <Navigate to="/login" />,
    },
  ];

  // Routes accessible only to authenticated users
  const privateRoutes = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Count />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...(!isAutorized ? publicRoutes : []),
    ...privateRoutes,
  ]);

  return <RouterProvider router={router} />;
};
