function createCards(objeto) {
    const card = document.createElement("div");
    card.classList.add("peliculas");

    const title = document.createElement("h3");
    const year = document.createElement("p");
    const description = document.createElement("p");

    const poster = document.createElement("img");

    title.innerHTML = objeto.title;
    year.innerHTML = `Año: ${objeto.year}`;
    description.innerHTML = `Dirigida por: ${objeto.director}.<br> 
    Duración: ${objeto.duration}.<br> 
    Género: ${objeto.genre}.<br> 
    Calificación: ${objeto.rate}⭐`;
    poster.src = objeto.poster;

    title.classList.add("cardTittle");
    year.classList.add("cardYear");
    description.classList.add("cardDirector");
    poster.classList.add("cardPoster");

    card.appendChild(title);
    card.appendChild(year);
    card.appendChild(description);
    card.appendChild(poster);

    return card;
};

module.exports = createCards;