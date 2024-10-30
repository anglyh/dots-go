import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./layouts/layout/Layout";
import Game from "./pages/Game/Game";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <NotFound />
  },
  {
    path: '/login',
    element: (
      <Layout>
        <Login />
      </Layout>
    )
  },
  {
    path: '/register',
    element: (
      <Layout>
        <Register/>
      </Layout>
    )
  },
  {
    path: '/admin',
    element: (
      <Layout>
        <Admin />
      </Layout>
    )
  },
  {
    path: '/game',
    element: (
      <Layout>
        <Game />
      </Layout>
    )
  }
]);

export default function App() { 
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}
