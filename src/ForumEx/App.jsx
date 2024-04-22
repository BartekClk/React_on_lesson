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
import Posts from './components/routes/Posts';
import Users from './components/routes/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Posts />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);


const App = () => {
  return <RouterProvider router={router}/>
};

export default App;