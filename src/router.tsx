import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./constants";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Meal from "./pages/Meal";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.RECIPE_URL(),
        element: <Meal />,
      },
      {
        path: ROUTES.FAVOURITES,
        element: <Favourites/>,
      },
    ],
  },
]);

export default router;