import useFetch from "@hooks/useFetch";
import React, { useEffect } from "react";
import Movie from "./Movie";
import Paginate from "./Paginate";

const FeatureMovie = () => {
  const [movies, setMovies] = React.useState([]);
  const [active, setActive] = React.useState();

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWI5MzA1MzdkMGM1NWFlOWM3YjkyZDk4ZWEzOThhMyIsIm5iZiI6MTc0MzAxMTUxOC4xNjgsInN1YiI6IjY3ZTQzZWJlMGVlNTNkNGU3MWYwZDVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UwUpDINQsA4l1Qh0r8-a6zln0yfINS7-9I0iH2EvAkM";
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&include_video=true",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    ).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 4);
      setMovies(popularMovies);
      setActive(popularMovies[0].id);
    });
  }, []);

  const { data: videRes } = useFetch({
    url: `/movie/${active}/videos`,
  } ,{ enable: !!active });

  const trailerKey = (videRes?.results || []).find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  )?.key;

  return (
    <div className="relative text-white">
      {movies.length > 1 &&
        movies
          .filter((movie) => movie.id === active)
          .map((movie) => (
            <Movie data={movie} key={movie.id} trailerKey={trailerKey} />
          ))}

      <Paginate movies={movies} active={active} setActive={setActive} />
    </div>
  );
};

export default FeatureMovie;
