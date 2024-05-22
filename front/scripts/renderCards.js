const createCards = require("./createCards.js");

function renderCards(data) {
    seccionTarjetas.innerHTML = "";

    const map1 = data.map((pelicula) =>
    seccionTarjetas.appendChild(createCards(pelicula))
    );

    map1.forEach((card) => {
    seccionTarjetas.appendChild(card);
    });}

module.exports = renderCards;