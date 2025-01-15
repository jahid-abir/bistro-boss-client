import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Secret from "../Components/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Dashboard/Cart";
import AllUsers from "../Dashboard/AllUsers";
import AdminRoute from "../Components/AdminRoute";
import AddItems from "../Dashboard/AddItems";
import ManageItem from "../Dashboard/ManageItem";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/menu',
          element: <Menu/>
        },
        {
          path: '/order/:category',
          element: <Order/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/secret',
          element: <PrivateRoute><Secret/></PrivateRoute>
        }
      ]
    },
    {
      path:'dashboard',
      element: <Dashboard/>,
      children: [
        // normal users routes 
        {
          path: 'cart',
          element: <Cart/>
        },

        // admins routes
        {
          path:'users',
          element: <AdminRoute><AllUsers/></AdminRoute>
        },
        {
          path: 'addItem',
          element: <AdminRoute><AddItems/></AdminRoute>
        },
        {
          path: 'manageItem',
          element: <AdminRoute><ManageItem/></AdminRoute>
        }
      ]
    }
  ]);