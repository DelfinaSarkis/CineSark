const {getAllMovies, createMovie} = require("../services/movieServices");

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

async function createMovies(req,res){
    try{
        const {title, year, director, genre, duration, rate, poster} = req.body;
        const newMovie = await createMovie({title, year, director, genre, duration, rate, poster});
        res.status(201).json(newMovie);
    } catch (error){
        res.status(500).json({
            error: "Error al obtener los datos",
        });
    }
};

module.exports = {moviesController, createMovies};