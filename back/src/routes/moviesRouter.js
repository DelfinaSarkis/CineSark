const {Router} = require ("express");
const {moviesController, createMovies} = require ("../controllers/moviesController");
const validate = require ("../middlewares/createMovieMiddleware");

const moviesRouter = Router()

moviesRouter.get("/", moviesController);

moviesRouter.post("/", validate, createMovies);

module.exports = moviesRouter;