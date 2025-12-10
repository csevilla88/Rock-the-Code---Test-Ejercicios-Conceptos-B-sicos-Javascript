const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

let longMovies = [];
let medianMovies = [];
let shortMovies = [];

for (let movie of movies) {
    if(movie.durationInMinutes < 100) {
        shortMovies.push(movie);
    } else if(movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
        medianMovies.push(movie);
    } else {
        longMovies.push(movie);
    }
}

console.log("Short Movies:", shortMovies);
console.log("Median Movies:", medianMovies);
console.log("Long Movies:", longMovies);