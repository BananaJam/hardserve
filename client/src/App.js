import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import Navbar from './components/navbar';
// import Home from './pages/home';
// import About from './pages/about';
// import Ingredients from "./pages/ingredients";

// import LogIn from "./components/LogIn/LogIn";
// import SignUp from "./components/SignUp/SignUp";
// import Navbar from "./components/LogIn/Navbar";
import SocialSign from "./components/SignUp/Social_sign";

function App() {
  return (
    <Router>

      {/* <Navbar/> */}

      <SocialSign/>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Routes> */}
    </Router>
  );
}

export default App;
