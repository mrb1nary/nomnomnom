import {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import { motion } from "framer-motion";
import { SplideSlide } from "@splidejs/react-splide";

function Cuisine() {

  let params=useParams()

  const [cuisine, setCuisine] = useState([])

  async function getCuisine(name){
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`)
    const data=await response.json()
    setCuisine(data.results)
    console.log(cuisine)
  }

  useEffect(() => {
    getCuisine(params.name)
    
  }, [params])


  return <div className="flex gap-5 flex-wrap justify-center">
    {cuisine.map((recipe) => {
      return (
        
        <div key={recipe.id} className="mt-[50px]">
                
                <img
                  className="rounded-xl opacity-80 cursor-pointer hover:opacity-100 transition-opacity  object-cover w-[250px] h-[250px] mt-3"
                  src={recipe.image}
                  alt={recipe.title}
                />
                
                <h1 className="h-10 font-bold w-[100%] m-5">{(recipe.title).substring(0,25)+'...'}</h1>
              
            </div>
        
      );
    })}
  </div>;
}

export default Cuisine;
