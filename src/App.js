
import { Routes, Route} from "react-router-dom"
import './App.css';
import "./css/forms.css"

import Homepage from './Pages/Homepage';
import Navbarr from "./Components/Navbar";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/home" element={<Navbarr/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
