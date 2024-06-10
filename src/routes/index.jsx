import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";
import UserDetail from "../pages/user/UserDetail";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/users/:username",
    element: <UserDetail />,
  },
]);
