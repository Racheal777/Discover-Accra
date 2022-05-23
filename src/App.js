
import { Routes, Route} from "react-router-dom"
import './App.css';
import "./css/forms.css"
import './css/index.css'

import Homepage from './Pages/Homepage';
import Navbarr from "./Components/Navbar";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Index from "./Pages";
import PasswordReset from "./Auth/passwordReset";
import ForgotPassword from "./Auth/forgotPassword";
import AdminPage from "./Pages/adminPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        {/* <Route path="/home" element={<Navbarr/>}></Route> */}
        <Route path="/home" element={<Index/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/password-reset" element={<PasswordReset/>}></Route>
        <Route path="/forgot-passsword" element={<ForgotPassword/>}></Route>
        <Route path="/admin" element={<AdminPage/>}>
        {/* <Route path="/password-reset" element={<PasswordReset/>}></Route> */}
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
