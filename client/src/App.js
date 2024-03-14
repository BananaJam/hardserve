import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Ingredients from "./pages/ingredients";
import Ingredient from "./pages/ingredient";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/ingredients/:id" element={<Ingredient />} />
      </Routes>
    </Router>
  );
}

export default App;
