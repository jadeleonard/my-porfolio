import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from "./pages/register";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/register",
        element:<Register />
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

