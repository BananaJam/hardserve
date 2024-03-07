import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Ingredients from "./pages/ingredients";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Routes>
    </Router>
  );
}

export default App;
