const movies = [
    { name: "Your Name", durationInMinutes: 130 },
    { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
    { name: "Origen", durationInMinutes: 165 },
    { name: "El señor de los anillos", durationInMinutes: 967 },
    { name: "Solo en casa", durationInMinutes: 214 },
    { name: "El jardin de las palabras", durationInMinutes: 40 }
];

let smallMovies = [];
let mediumMovies = [];
let largeMovies = [];

for (let i = 0; i < movies.length; i++) {
    if (movies[i].durationInMinutes < 100) {
        smallMovies.push(movies[i]);
    } else if (movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes < 200) {
        mediumMovies.push(movies[i]);
    } else if (movies[i].durationInMinutes >= 200) {
        largeMovies.push(movies[i]);
    }
}

console.log("Películas pequeñas:", smallMovies);
console.log("Películas medianas:", mediumMovies);
console.log("Películas grandes:", largeMovies);
