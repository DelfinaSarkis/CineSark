const MovieModel = require("../models/MovieModel");

class Movie{
    constructor(title,year,director,duration,genre,rate,poster){
        if(!title || !poster || !director){throw error();}
        this.title = title,
        this.year = year,
        this.director = director,
        this.duration = duration,
        this.genre = genre,
        this.rate = rate,
        this.poster = poster
    };
};

async function getAllMovies(){
    const movies = await MovieModel.find()
    try{
    const movieInstance = movies.map((movie) => {
        return new Movie(
            movie.title,
            movie.year,
            movie.director,
            movie.duration,
            movie.genre,
            movie.rate,
            movie.poster
        )
    })
    return movieInstance;
} catch(error){
    console.log(error);
}
};

async function createMovie(data){
    try{
        const createdMovie = await MovieModel.create(data);
        return createdMovie;
    } catch(error){
        console.log(error);
    }
};

module.exports = {getAllMovies, createMovie};