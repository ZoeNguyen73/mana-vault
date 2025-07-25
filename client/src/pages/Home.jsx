import { useState } from "react";

import SearchBar from "../components/SearchBar";

const Home = () => {
  console.log("Home page rendered");

  const [ cards, setCards ] = useState([]);

  return (
    <div className="relative flex flex-row-nowrap gap-3 text-text pt-15 px-8 pb-8 h-screen">
      <div className="flex-2 border-1 border-red">
        <SearchBar setCards={setCards}/>
      </div>

      <div className="flex-1 border-1 border-blue">

      </div>
      
    </div>
  )
}

export default Home;