import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Contact from "../Pages/Contact/Contact";

import Shop from "../Pages/Shop/Shop/Shop";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
