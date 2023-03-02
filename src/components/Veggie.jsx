import React, { useEffect, useState } from "react";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/css';

function Veggie() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getVeggie()
  },[])

  async function getVeggie() {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=10`
    );
    const data = await api.json();
    setData(data.recipes);
  }
  return (
    <>
    <div className="block w-auto h-2 m-8 p-10 text-center text-2xl">Vegetarian Picks</div>
    <Splide options={{
      perPage: 5,
      drag: 'free',
      gap: '5rem',
      arrows: false,
    }}>
    {data.map((recipe) => {
      return (
        <SplideSlide key={recipe.id}>
        <div key={recipe.id}>
                
                <img
                  className="rounded-xl opacity-80 cursor-pointer hover:opacity-100 transition-opacity  object-cover w-[100%] h-[100%] mt-4"
                  src={recipe.image}
                  alt={recipe.title}
                />
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <h1 className="h-10 text-center p-5">{recipe.title}</h1>
              
            </div>
        </SplideSlide>
      );
    })}
    </Splide>
  </>
  )
}

export default Veggie