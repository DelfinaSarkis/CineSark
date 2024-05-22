const axios = require("axios");

async function handler (event){
    event.preventDefault();

    const title = document.getElementById('título').value.trim();
    const year = document.getElementById('año').value.trim();
    const director = document.getElementById('director').value.trim();
    const genre = document.getElementById('género').value.trim();
    const duration = document.getElementById('duración').value.trim();
    const rate = document.getElementById('calificación').value.trim();
    const poster = document.getElementById('url-imagen').value.trim();

    if (!title || !year || !director || !genre || !duration || !rate || !poster){
        alert('Por favor completar todos los campos.');
        return;
    } 
    else if( year.length !== 4){
        alert("Por favor introduzca un número de 4 dígitos.");
        return;
    } else if( rate > 10 || rate < 0){
        alert("Por favor introduzca una calificación válida.");
        return;
    }
    try {
        await axios.post("http://localhost:3000/movies", {title, year: parseInt(year), director, genre: genre.split(","), duration, rate: parseFloat(rate), poster});
        clear();
    } catch (err) { console.error(err);}
    
};

function clear (){
    document.getElementById('título').value = '';
    document.getElementById('año').value = '';
    document.getElementById('director').value = '';
    document.getElementById('género').value = '';
    document.getElementById('duración').value = '';
    document.getElementById('calificación').value = '';
    document.getElementById('url-imagen').value = '';
};

const submitButton = document.getElementById('submitInput');
submitButton.addEventListener('click', (event)=> {
    handler(event);
});

const clearButton = document.getElementById('clearInput');
clearButton.addEventListener('click', clear);


