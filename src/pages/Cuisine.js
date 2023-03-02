import {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import { motion } from "framer-motion";

function Cuisine() {

  let params=useParams()

  const [cuisine, setCuisine] = useState([])

  async function getCuisine(name){
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`)
    const data=await response.json()
    setCuisine(data.results)
  }

  useEffect(() => {
    getCuisine(params.name)
    console.log(params.name)
  }, [params])


  return <div>

  </div>;
}

export default Cuisine;
