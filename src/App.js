
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';

import Homepage from './Pages/Homepage';
import Navbarr from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/home" element={<Navbarr/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
