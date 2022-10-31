import NavigationBar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import  Signup  from "./pages/Signup";
import Profile from "./pages/Profile";
import StaffLogin from "./pages/StaffLogin";
import StaffProfile from "./pages/StaffProfile";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <NavigationBar />
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/profile" element={<Profile></Profile>} />
          <Route path="/staff-login" element={<StaffLogin></StaffLogin>} />
          <Route
            path="/staff-profile"
            element={<StaffProfile></StaffProfile>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
