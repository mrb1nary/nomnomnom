import { Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";

function Pages() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:name" element={<Cuisine />} />
          <Route path="/search/:item" element={<Searched />} />
        </Routes>
      
    </>
  );
}

export default Pages;
