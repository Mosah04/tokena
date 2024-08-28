import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Dashboard from "@/pages/Dashboard";
import News from "@/pages/News";
import NotFound from "@/pages/NotFound";
import { trendingLoader } from "@api/dashboardLoader";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        index: true,
        loader: trendingLoader,
        element: <Dashboard />,
        errorElement: <Error />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
