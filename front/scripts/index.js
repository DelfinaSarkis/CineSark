
function MovieTarget(movie) {
    const divTarjeta = document.createElement('div');
    divTarjeta.classList.add("peliculas");

    const title = document.createElement('h3');
    const year = document.createElement('p');
    const director = document.createElement('p');
    const duration = document.createElement('p');
    const genre = document.createElement('p');
    const rate = document.createElement('p');
    const poster = document.createElement('img');

    title.textContent = movie.title;
    year.textContent = `Año: ${movie.year}`;
    director.textContent = `Director: ${movie.director}`;
    duration.textContent = `Duración: ${movie.duration}`;
    genre.textContent = `Género: ${movie.genre}`;
    rate.textContent = `Calificación: ${movie.rate}⭐`;
    poster.src = movie.poster;

    divTarjeta.appendChild(title);
    divTarjeta.appendChild(year);
    divTarjeta.appendChild(director);
    divTarjeta.appendChild(duration);
    divTarjeta.appendChild(genre);
    divTarjeta.appendChild(rate);
    divTarjeta.appendChild(poster);

    return divTarjeta;
}

function MovieHTML() {
    const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
    tempData.forEach(pelicula => {
        const tarjeta = MovieTarget(pelicula);
        contenedorTarjetas.appendChild(tarjeta);
    });
}

document.addEventListener("DOMContentLoaded", function(){
    MovieHTML();
})


