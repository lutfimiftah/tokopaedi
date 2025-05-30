import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/Register";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/register",
    element: <Register/>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;