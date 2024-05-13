const {renderCards} = require("./renderCards");
const axios = require("axios");

const getPeliculaJQ = async function(){
    try{
        const response =
        await axios.get("https://students-api.up.railway.app/movies"
);

console.log(response.data);
    } catch (error){
        console.log("Hubo un error:\n", error);
    }
};

getPeliculaJQ();

// const url = "https://students-api.up.railway.app/movies";

// $.get(url, function(data){
//    renderCards(data);
// }).fail(function(){
//    console.log('Hubo un error');
// });
