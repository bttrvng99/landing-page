export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2Y3YzQxN2U4ODdmNzdkYTJmNmM5YmExNTU2YmQ5OCIsInN1YiI6IjY2NDQ2OTZiYTE3ZjJiYzVkNjJkNmNlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-DUSjLPfCUV8rjO0hV7g5w2N6h_TGZVbujTRyvQpnlk",
  },
};

export const BASE_IMG_URL = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";

export const URL_MOVIE_DETAIL = "https://api.themoviedb.org/3/movie/";
export const URL_SERIE_DETAIL ="https://api.themoviedb.org/3/tv/"
export const REGION = "?language=en-US";

export const MOVIE = 0;
export const SERIES = 1;
