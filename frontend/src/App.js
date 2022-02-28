import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import Addcontact from "./components/addcontact";

function App() {
  return (  
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/contact" exact element={<Contact />} />

          <Route path="/addcontact" exact element={<Addcontact />} />
    </Routes>
    </BrowserRouter>
      
    );
}

export default App;
