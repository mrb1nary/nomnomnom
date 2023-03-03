import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [search, setSeacrh] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/search/" + search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-[100%] h-10 justify-center items-center">
        <div className="flex justify-center items-center w-[40rem] bg-slate-800 rounded-xl">
          <FaSearch className="text-2xl ml-2 text-white" />
          <input
            className="bg-slate-800 w-[40rem] rounded-xl p-4 focus:outline-none text-white cursor-text focus:"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSeacrh(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}

export default Search;
