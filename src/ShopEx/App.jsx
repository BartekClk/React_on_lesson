import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Redirect,useRouteMatch 
} from "react-router-dom";
import './App.css';

import WebsiteLayout from './components/WebsiteLayout';
import ErrorPage from './components/routes/ErrorPage';
import Cart from "./components/routes/Cart";
import Shop from "./components/routes/Shop";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);


const App = () => {
  return <RouterProvider router={router}/>
};

export default App;