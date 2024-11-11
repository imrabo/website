import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "../pages/auth/sign_up";
import SignIn from "../pages/auth/sign_in";
import HomeScreen from "../pages/home";
import Dashboard from "../pages/dashboard/dashboard";


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
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default AppRouter;
