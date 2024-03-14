import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import Home from './pages/home';
import About from './pages/about';
import Ingredients from "./pages/ingredients";

import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Routes>
    </Router>
  );
}

export default App;
