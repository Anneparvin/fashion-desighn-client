import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layouts/Main";
import Home from "../../src/Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login/Login";
import SignUp from "../Components/Pages/Login/SignUp/SignUp";
import Dashboard from "../Components/Layouts/Dashboard";
import AllUsers from "../Components/Pages/Dashboard/AllUsers/AllUsers";
import UserHome from "../Components/Pages/Dashboard/UserHome/UserHome";
import AddClass from "../Components/Pages/Dashboard/AddClass/AddClass";
import ManageClass from "../Components/Pages/Dashboard/ManageClass/ManageClass";
import Instructors from "../Components/Pages/Dashboard/Instructors/Instructors";
import Payment from "../Components/Pages/Dashboard/Payment/Payment";
import MyCart from "../Components/Pages/Dashboard/MyCart/MyCart";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>,  
        },
        {
            path: "/login",
            element: <Login></Login>,  
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>,  
        }
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
            path: "userhome",
            element: <UserHome></UserHome>,  
        },
        {
            path: "allusers",
            element: <AllUsers></AllUsers>,  
        },
        {
            path: "addclass",
            element: <AddClass></AddClass>,  
        },
        {
            path: "manageclass",
            element: <ManageClass></ManageClass>,  
        },
        {
            path: "instructors",
            element: <Instructors></Instructors>,  
        },
        {
            path: "payment",
            element: <Payment></Payment>,  
        },
        {
            path: "mycart",
            element: <MyCart></MyCart>,  
        }
      ]
    }
  ]);