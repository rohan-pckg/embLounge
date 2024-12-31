import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Mbale from "./pages/Mbale.jsx";
import ContactPage from "./pages/contact.jsx";
import Iganga from "./pages/iganga.jsx";
import Jinja from "./pages/Jinja.jsx";
import Busia from "./pages/Busia.jsx";
import NewsPage from "./pages/News.jsx";

import "./globalStyles.module.scss";
import "./index.css";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/branch/mbale" element={<Mbale />} />
        <Route path="/branch/iganga" element={<Iganga />} />
        <Route path="/branch/busia" element={<Busia />} />
        <Route path="/branch/jinja" element={<Jinja />} />
         <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </Router>
  );
}

export default App;
