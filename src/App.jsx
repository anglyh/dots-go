import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Header from "./layouts/header/Header";
import Login from "./pages/Login/Login";
import NotFound from "./pages/Not Found/NotFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <NotFound/>
  },
  {
    path: '/login',
    element: <Login/>
  }
]);

export default function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router}/>
    </div>
  );
}

