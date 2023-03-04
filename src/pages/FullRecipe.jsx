import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FullRecipe() {
  const [data, setData] = useState([]);
  let params = useParams();

  async function getRecipe(id) {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    setData(data);
  }

  useEffect(() => {
    getRecipe(params.id);
  }, [params.id]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            className="rounded-xl opacity-80 cursor-pointer hover:opacity-100 transition-opacity  object-cover w-[100%] h-[100%] mt-4"
            src={data.image}
            alt={data.title}
          />
          <h1 className="h-10 text-center p-5 font-bold">{data.title}</h1>
        </div>
        <div className="flex flex-col w-[80%] justify-start items-start">
          <h3 className="mt-10 text-2xl font-bold">🥣Ingredients</h3>
          <ul className="ml-9 mt-9">
            {data.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id} className="font-semibold">
                >{ingredient.original}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-[80%] justify-start items-start">
          <h3 className="mt-10 text-2xl font-bold">📝Instructions</h3>
          <p
            className="ml-9 mt-9 font-semibold"
            dangerouslySetInnerHTML={{ __html: data.instructions }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default FullRecipe;
