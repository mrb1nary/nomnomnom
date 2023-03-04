import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/splide/css";

function Popular() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  async function getPopular() {
    const check = localStorage.getItem("popular");

    if (check) {
      setData(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setData(data.recipes);
      
    }
  }

  return (
    <>
      <div className="block w-auto h-2 m-8 p-10 text-center text-2xl">
        Popular Picks
      </div>
      <Splide
        options={{
          perPage: 5,
          drag: "free",
          gap: "5rem",
          arrows: false,
        }}
      >
        
        {data?.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Link to={"/recipe/" + recipe.id}>
              <div key={recipe.id}>
                <img
                  className="rounded-xl opacity-80 cursor-pointer hover:opacity-100 transition-opacity  object-cover w-[100%] h-[100%] mt-4"
                  src={recipe.image}
                  alt={recipe.title}
                />

                <h1 className="h-10 text-center p-5">{recipe.title}</h1>
              </div>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
}

export default Popular;
