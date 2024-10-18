import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./layouts/header/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}