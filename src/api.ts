const API_KEY = "f24a0465a510cada09a4f4bf2dded3fa";
const BASE_PATH = "https://api.themoviedb.org/3/movie";

export function getMovies() {
  return fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=f24a0465a510cada09a4f4bf2dded3fa&language=en-US&page=1"
  ).then((response) => response.json());
}
