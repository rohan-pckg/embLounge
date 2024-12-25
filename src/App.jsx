import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Mbale from "./pages/Mbale.jsx";
import "./globalStyles.module.scss";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/branch/mbale" element={<Mbale />} />
      </Routes>
    </Router>
  );
}

export default App;
