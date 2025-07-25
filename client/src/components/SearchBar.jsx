import { useState } from "react";

import { useErrorHandler } from "../context/ErrorHandlerProvider";

import axios from "../api/axios";

import MessageBox from "./MessageBox";

const SearchBar = ({ setCards }) => {
  const { handleError } = useErrorHandler();

  const [ searchString, setSearchString ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ showMessageBox, setShowMessageBox ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState("");

  const handleSearch = async () => {
    if (!searchString.trim()) return;

    setLoading(true);
    setErrorMessage("");
    setShowMessageBox(false);

    try {
      const formattedSearchString = searchString.trim().replace(" ","+");
      const response = await axios.get(`scryfall/searchByName/${formattedSearchString}`);
      console.log("response.data: " + JSON.stringify(response.data));
      setCards(response.data.data);

    } catch (error) {
      const parsedError = await handleError(error);
      if (parsedError && parsedError?.type !== "form") {
        console.log("parsedError: " + JSON.stringify(parsedError));
        setErrorMessage(`${parsedError.message}. ${parsedError.details}`);
        setShowMessageBox(true);
      }

    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="flex-col gap-2 p-4 w-1/2">
      <div className="flex gap-2 items-center mb-3">
        <input
          type="text"
          placeholder="Search for a card..."
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          className="border rounded-full px-3 py-2 w-full"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      

      {showMessageBox && errorMessage && (
        <MessageBox 
          content={errorMessage}
          type="error"
        />
      )}
    </div>
  )

};

export default SearchBar;