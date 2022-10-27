import NavigationBar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import  Signup  from "./pages/Signup";
import Profile from "./pages/Profile";


function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/profile" element={<Profile></Profile>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
