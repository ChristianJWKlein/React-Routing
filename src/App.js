import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import CatchAll from "./CatchAll";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Link to="product/1">Product 1</Link>
      <Link to="product/2">Product 2</Link>
      <Link to="product/3">Product 3</Link>
      <Link to="form">Form</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="form" element={<Form />} />
        <Route path="*" element={<CatchAll />} />
      </Routes>
    </div>
  );
}

export default App;
