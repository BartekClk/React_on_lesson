import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';
import Posts from './components/Posts';
import Users from './components/Users';

// const router = createBrowserRouter([
//   {
//     element: <NavBar/>,
//     children: [
//       { path: "/posts", element: <Posts/> },
//       { path: "/home", element: <Users/> },
//       { path: "/*", element: <h1>Strona nie istnieje</h1> },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/posts",
        element: <h1>posts</h1>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App;