import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';

import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Navbar from "./components/LogIn/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
