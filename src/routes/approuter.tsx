import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "../pages/auth/sign_up";
import SignIn from "../pages/auth/sign_in";
import HomeScreen from "../pages/home";

import DashboardLayout from "../layout/dashboard-layout";
import Dashboard from "../pages/dashboard/dashboard";
import Resources from "../pages/dashboard/resources";
import Users from "../pages/dashboard/users";
import Organization from "../pages/dashboard/organization";
import Teams from "../pages/dashboard/team";
import Project from "../pages/dashboard/project";
import Courses from "../pages/dashboard/croues";


function AppRouter() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
    // Auth screens
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    // Dashboard
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children:[
        {
          path:'',
          element:<Dashboard/>
        },
        {
          path:'resources',
          element:<Resources/>
        },
        {
          path:'organization',
          element:<Organization/>
        },
        {
          path:'project',
          element:<Project/>
        },
        {
          path:'courses',
          element:<Courses/>
        },
        {
          path:'teams',
          element:<Teams/>
        },
        {
          path:'users',
          element:<Users/>
        }
      ]
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default AppRouter;
