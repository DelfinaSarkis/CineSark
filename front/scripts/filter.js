const renderCards = require("./renderCards")

function filter(data) {
    const movieSearchInput = document.getElementById("searchInput");
    movieSearchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.trim().toLowerCase();
    const filteredMovies = data.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm)
    );
    renderCards(filteredMovies);
    });
};


module.exports = filter;