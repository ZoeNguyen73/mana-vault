const axios = require("axios");

const handleAxiosError = require("../utils/handleAxiosError");

const NAME_SEARCH_API = "https://api.scryfall.com/cards/search?q=";

const controller = {
  searchByName: async (req, res, next) => {
    console.log("req.params: " + JSON.stringify(req.params));
    const searchString = req.params.string;
    
    try {
      const apiURL = `${NAME_SEARCH_API}${searchString}`;
      console.log("api URL: " + apiURL);
      const response = await axios.get(apiURL);
      // console.log("response: " + JSON.stringify(response.data));
      return res.status(200).json(response.data);
    } catch (err) {
      return handleAxiosError(err, next, "Scryfall Api error");
    }
  },

  getById: async (req, res, next) => {

  },
};

module.exports = controller;