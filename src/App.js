import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home content="radio" />} />
          <Route exact path="/radio" element={<Home content="radio" />} />
          <Route exact path="/code" element={<Home content="code" />} />
          <Route exact path="/crypto" element={<Home content="crypto" />} />
        </Routes>
      </Router>
    </div>
  );
}
