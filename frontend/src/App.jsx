
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Singup";
import Signin from "./pages/Signin";
import ProtectedRoute from "./pages/ProtectedRoute";
// import Main from "./components/layout/main";
// import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import {useState, useEffect} from 'react'

function App() {
  // const token = localStorage.getItem('token'); // manage authentication state
  // // console.log(token)
    const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    setToken(localStorage.getItem('token')); // Update the token state when localStorage changes
  }, []);

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route
          path="/"
          element={
            <ProtectedRoute token={token}>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

