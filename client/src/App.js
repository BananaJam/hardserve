import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Navbar from "./components/LogIn/Navbar";

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />

        <Routes>

          <Route path="/" element={<LogIn/>} />
          <Route path="/sign" element={<SignUp />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
