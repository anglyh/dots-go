import React from "react";
import "./App.css";
import Header from "./layouts/header/Header";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";

export default function App() { 
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}
