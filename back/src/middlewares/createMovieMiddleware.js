async function validate(req, res, next){
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if(!title || !year || !director || !duration || !genre || !rate || !poster){
        console.log("Los campos deben estar completos.")
        return res.status(400).json({ error: "Los campos deben estar completos" });
    }

    else if(typeof title !== "string" || typeof director !== "string" || typeof poster !== "string" || typeof duration !== "string"){
        console.log("No es string.");
        return res.status(400).json({ error: "Los campos deben ser string." });
    }
    
    else if( rate > 10 || rate < 0){
        console.log("El rate debe ser mayor a 0 y menor a 10.");
        return res.status(400).json({error: "El rate debe ser válido."});
    }

    else if(typeof genre !== "object"){
        console.log("El género debe ser un array.");
        return res.status(400).json({error: "El género debe ser un array."});
    }

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if(!urlRegex.test(poster)) {
        console.log("La URL del póster no es válida.");
        return res.status(400).json({ error: "La URL del póster no es válida." });
    }

    else if(typeof year !== "number" || typeof rate !== "number"){
        console.log("Año y calificación deben ser números.");
        return res.status(400).json({ error: "Año y/o calificación no es/son válido/s." });
    }

    else if (typeof genre !== "object") {
        console.log("El género debe ser un array.");
        return res.status(400).json({ error: "El género debe ser un array." });
    }

    else if (genre.length === 0) {
        console.log("El género no puede estar vacío.");
        return res.status(400).json({ error: "El género no puede estar vacío." });
    }

    else if (genre.some((g) => typeof g !== "string")) {
        console.log("Los géneros deben ser de tipo string.");
        return res.status(400).json({ error: "Los géneros deben ser de tipo string." });
    }

    else if (genre.some((g) => g.length === 0)) {
        console.log("Los géneros no pueden estar vacíos.");
        return res.status(400).json({ error: "Los géneros no pueden estar vacíos." });
    }

    next();
};

module.exports = validate;