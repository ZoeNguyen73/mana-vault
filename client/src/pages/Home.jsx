import { useState } from "react";

import SearchBar from "../components/SearchBar";

const Home = () => {
  console.log("Home page rendered");
  return (
    <div className="text-4xl text-text tracking-wide border border-red-500">
      Home page
      <SearchBar />
    </div>
  )
}

export default Home;