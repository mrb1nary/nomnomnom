import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import FullRecipe from "./FullRecipe";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function Pages() {
  let Location = useLocation();
  return (
    <>
      <AnimatePresence wait>
        <Routes location={Location} key={Location.path}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:name" element={<Cuisine />} />
          <Route path="/search/:item" element={<Searched />} />
          <Route path="/recipe/:id" element={<FullRecipe />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default Pages;
