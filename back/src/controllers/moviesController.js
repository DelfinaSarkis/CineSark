const {getAllMovies} = require("../services/movieServices");

async function moviesController(req,res){
    try{
        const movies = await getAllMovies();
        console.log(movies);
        res.status(200).json(movies);
    } catch{
        console.log("Error");
    }
};

module.exports = {moviesController};