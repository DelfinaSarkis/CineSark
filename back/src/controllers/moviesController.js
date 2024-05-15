async function moviesController(req,res){
    try{

        res.send("Próximamente estarán disponibles los datos de películas");
    } catch{
        console.log("Error");
    }
};

module.exports = {moviesController};