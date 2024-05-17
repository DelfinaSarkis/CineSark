const {getAllMovies} = require("../services/movieServices");

async function moviesController(req,res){
    try{
        const movies = await getAllMovies();
        console.log(movies);
        res.status(200).json(movies);
    } catch (error){
        res.status(500).json({
            error: "Error al obtener los datos",
        });
    }
};

module.exports = {moviesController};