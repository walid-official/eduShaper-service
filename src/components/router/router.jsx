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
import UpdateServices from "../../pages/UpdateServices";
import BookService from "../../pages/BookService";

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
        element: (
          <PrivetRouter>
            <AddService></AddService>
          </PrivetRouter>
        ),
      },
      {
        path: "DetailService/:id",
        element: (
          <PrivetRouter>
            {" "}
            <DetailsServices></DetailsServices>{" "}
          </PrivetRouter>
        ),
      },
      {
        path: "updateService/:id",
        element: (
          <PrivetRouter>
            {" "}
            <UpdateServices></UpdateServices>{" "}
          </PrivetRouter>
        ),
      },
      {
        path: "bookService/:id",
        element: (
          <PrivetRouter>
            {" "}
            <UpdateServices></UpdateServices>{" "}
          </PrivetRouter>
        ),
      },
      {
        path: "ManageService",
        element: (
          <PrivetRouter>
            {" "}
            <BookService></BookService>{" "}
          </PrivetRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
