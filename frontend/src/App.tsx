import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Details from "./pages/Details"; 
import Booking from "./pages/Booking";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/details/:id" element={<Details />} />
         <Route path="/booking" element={<Booking/>}/>
           <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
