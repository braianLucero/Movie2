// Definición de la clase Movie
class Movie {
  constructor(id, title, year) {
    this.id = id;
    this.title = title;
    this.year = year;
  }
}

// Definición del Mapper
class MovieMapper {
  // Método para convertir un objeto de base de datos en un objeto Movie
  static fromDatabase(data) {
    return new Movie(data.id, data.title, data.year);
  }

  // Método para convertir un objeto Movie en un objeto para la base de datos
  static toDatabase(movie) {
    return {
      id: movie.id,
      title: movie.title,
      year: movie.year,
    };
  }
}

// Ejemplo de uso
const movieData = {
  id: 1,
  title: 'The Shawshank Redemption',
  year: 1994,
};

// Convertir datos de base de datos en un objeto Movie
const movie = MovieMapper.fromDatabase(movieData);
console.log(movie);

// Convertir un objeto Movie en datos para la base de datos
const movieForDatabase = MovieMapper.toDatabase(movie);
console.log(movieForDatabase);
