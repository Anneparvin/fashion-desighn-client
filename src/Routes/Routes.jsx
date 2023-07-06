import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layouts/Main";
import Home from "../../src/Components/Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>,  
        }
      ]
    },
  ]);