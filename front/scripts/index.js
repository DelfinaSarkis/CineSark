function getPeliculaJQ() {
    const url = `https://students-api.up.railway.app/movies`;

    $.get(url, function(data){
        const seccionTarjetas = document.getElementById('tarjetas');
        seccionTarjetas.innerHTML = '';

        data.forEach(pelicula => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
            <h2>${pelicula.title}</h2>
            <p>Direction: ${pelicula.director}.</p>
            <p>Year: ${pelicula.year}</p>
            <p>Duration: ${pelicula.duration}.</p>
            <p>Genre: ${pelicula.genre.join(", ")}.</p>
            <p>Rate: ${pelicula.rate}⭐</p>
            <img src="${pelicula.poster}" alt="${pelicula.title}">
        `;

        seccionTarjetas.appendChild(card);
        });
    }).fail(function(){
        console.log('Hubo un error');
    });
}

$(document).ready(function(){
    getPeliculaJQ();
});