import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Searched() {
  let params=useParams()
  const [searched, setSearched] = useState([])
  
  
  async function getSearched(name){
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=10`)
    const data=await response.json()
    setSearched(data.results)
    
  }
  
  useEffect(() => {
    getSearched(params.item)
    
  }, [params.item])


  return <div className="flex gap-5 flex-wrap justify-center">
    {searched?.map((recipe) => {
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
    </div>
  
}

export default Searched