const {renderCards} = require("./renderCards");
const axios = require("axios");

function filter(data) {
    const movieSearchInput = document.getElementById("searchInput");
    movieSearchInput.addEventListener("input", (event) => {
        console.log("oh me estan consolelogeando")
      const searchTerm = event.target.value.trim().toLowerCase();
      const filteredMovies = data.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm)
      );
      renderCards(filteredMovies);
    });
  }

const getPeliculaJQ = async function(){
    try{
        const response = await axios.get("http://localhost:3000/movies");
renderCards(response.data);

filter(response.data);
    
    
}
catch (error){
        console.log("Hubo un error:\n", error);
    }
};


getPeliculaJQ();