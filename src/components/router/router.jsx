import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../pages/Home";
import Register from "../../pages/Authentication/Register";
import Login from "../../pages/Authentication/Login";
import ErrorPage from "../../pages/ErrorPage";
import AddService from "../../pages/AddService";
import PrivetRouter from "./PrivetRouter";
import DetailsServices from "../../pages/DetailsServices";
import ManageService from "../../pages/ManageService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "add-service",
        element: <PrivetRouter><AddService></AddService></PrivetRouter>
      },
      {
        path: "DetailService/:id",
        element: <PrivetRouter> <DetailsServices></DetailsServices> </PrivetRouter>
      },
      {
        path: "ManageService",
        element: <PrivetRouter> <ManageService></ManageService> </PrivetRouter>
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
