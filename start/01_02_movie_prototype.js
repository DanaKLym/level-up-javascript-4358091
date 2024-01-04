// Write your code here
/*const movieObj = {
 title: "Harry Potter",
 director: "David Yates",
 genre: "fantasy",
 releaseYear: 2007,
 rating: 7.5,

};


function getOverview(movie, director, releaseYear, rating){
  return `${movie}, a film directed by ${director} was released in ${releaseYear}. It received a rating of ${rating}`
}*/

const Movie = class Movie{
  constructor(title, director, genre, releaseYear, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview(){
    return `${this.title}, a film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
};

const Twilight = new Movie("Twilight", "Catherine Hardwicke", "romantic fantasy", 2008, 53);
const HarryPotter = new Movie("Harry Potter", "David Yates", "fantasy", 2007, 85)

console.log(HarryPotter);
console.log(Twilight.getOverview());
console.log(HarryPotter.getOverview());