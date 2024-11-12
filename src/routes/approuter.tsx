import React, { useRef, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import TopLoadingBar from "react-top-loading-bar";

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

const AppRouter: React.FC = () => {
  const loadingBarRef = useRef<TopLoadingBar>(null);
  
  const [isLoading, setIsLoading] = useState(false);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "resources", element: <Resources /> },
        { path: "organization", element: <Organization /> },
        { path: "project", element: <Project /> },
        { path: "courses", element: <Courses /> },
        { path: "teams", element: <Teams /> },
        { path: "users", element: <Users /> },
      ],
    },
  ]);

  useEffect(() => {
    if (isLoading) {
      loadingBarRef.current?.continuousStart();
    } else {
      loadingBarRef.current?.complete();
    }
  }, [isLoading]);

  

  return (
    <>
      {/* Loading Bar */}
      <TopLoadingBar color="#4f46e5" ref={loadingBarRef} height={3} />

      {/* RouterProvider to render the routes */}
      <RouterProvider
        router={routes}
        fallbackElement={<div>Loading...</div>}
      
      
      />
    </>
  );
};

export default AppRouter;
