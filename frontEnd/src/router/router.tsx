import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../page/LandingPage";
import Register from "../page/Register";
import Login from "../page/Login";
import HomePage from "../page/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
]);
