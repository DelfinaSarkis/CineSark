function renderCards(data) {
    const seccionTarjetas = document.getElementById("seccion-tarjetas");
        seccionTarjetas.innerHTML = '';

        data.forEach(pelicula => {
            const card = document.createElement('div');
            card.classList.add('tarjetas');

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
};

module.exports = {
    renderCards: renderCards
};