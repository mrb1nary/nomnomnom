import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink, Router } from "react-router-dom";

function Category() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center w-[60%] p-9 gap-7">
        <NavLink
          to={"/cuisine/Italian"}
          className="flex w-[150px] justify-center items-center h-[75px] bg-orange-200 rounded-full hover:bg-orange-300 transition-all duration-200"
        >
          <FaPizzaSlice className="m-2" />
          <h4 className="">Italian</h4>
        </NavLink>

        <NavLink
          to={"/cuisine/American"}
          className="flex w-[150px] justify-center items-center h-[75px] bg-orange-200 rounded-full hover:bg-orange-300 transition-all duration-200"
        >
          <FaHamburger className="m-2" />
          <h4>American</h4>
        </NavLink>

        <NavLink
          to={"/cuisine/Thai"}
          className="flex w-[150px] justify-center items-center h-[75px] bg-orange-200 rounded-full hover:bg-orange-300 transition-all duration-200"
        >
          <GiNoodles className="m-2" />
          <h4>Thai</h4>
        </NavLink>

        <NavLink
          to={"/cuisine/Chinese"}
          className="flex w-[150px] justify-center items-center h-[75px] bg-orange-200 rounded-full hover:bg-orange-300 transition-all duration-200"
        >
          <GiChopsticks className="m-2" />
          <h4>Chinese</h4>
        </NavLink>
      </div>
    </div>
  );
}

export default Category;
