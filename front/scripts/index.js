const renderCards = require("./renderCards");
const filter = require("./filter");
const axios = require("axios");

const renderMovies = async function () {
  try {
      const data = await axios.get("http://localhost:3000/movies")
      renderCards(data.data);
      filter(data.data);
  } catch (err){
      console.error(err);
  }
};

renderMovies();