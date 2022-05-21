export async function searchMoviesFilmId(idFilm) {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${idFilm}&apikey=3d932b68`
  );
  const data = await response.json();
  return data;
}

export async function searchMoviesTitle(queri) {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${queri}&apikey=3d932b68`
  );
  const data = await response.json();
  return data.Search;
}

export async function createList(title, movies) {
  const response = await fetch(
    "https://acb-api.algoritmika.org/api/movies/list",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        movies: movies.map((m) => m.imdbID),
      }),
    }
  );
  const data = await response.json();
  return data;
}

export async function gettingListMovies(id) {
  const response = await fetch(
    `https://acb-api.algoritmika.org/api/movies/list/${id}`
  );
  const data = await response.json();
  const moviesPromises = data.movies.map((movieId) => {
    return searchMoviesFilmId(movieId);
  });
  const movies = await Promise.all(moviesPromises);
  return {
    id: data.id,
    title: data.title,
    movies: movies,
    poster: data.Poster,
  };
}
