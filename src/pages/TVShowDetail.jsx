/* eslint-disable no-unused-vars */
import LoadingAnimation from "@/components/LoadingAnimation";
import ActorList from "@/components/MediaDetail/ActorList";
import Banner from "@/components/MediaDetail/Banner";
import RelativeMediaList from "@/components/MediaDetail/RelativeMediaList";
import SessionList from "@/components/MediaDetail/SessionList";
import TVShowInfomation from "@/components/MediaDetail/TVShowInfomation";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TVShowDetail = () => {
  const { id } = useParams();

  const [isRelatedMovieLoading, setIsRelatedMovieLoading] = useState(false);

  const [relatedMovies, setRelatedMovies] = useState([]);

  const { data: movieInfo, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,release_dates,aggregate_credits,videos`,
  });

  useEffect(() => {
    setIsRelatedMovieLoading(true);
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWI5MzA1MzdkMGM1NWFlOWM3YjkyZDk4ZWEzOThhMyIsIm5iZiI6MTc0MzAxMTUxOC4xNjgsInN1YiI6IjY3ZTQzZWJlMGVlNTNkNGU3MWYwZDVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UwUpDINQsA4l1Qh0r8-a6zln0yfINS7-9I0iH2EvAkM";

    const url = ` https://api.themoviedb.org/3/tv/${id}/recommendations`;
    if (url) {
      fetch(`${url}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then(async (res) => {
          const data = await res.json();
          const currentRalatedMovies = (data.results || []).slice(0, 12);
          setRelatedMovies(currentRalatedMovies);
        })
        .catch((error) => console.log(error))
        .finally(() => setIsRelatedMovieLoading(false));
    }
  }, [id]);

  if (isLoading)
    return (
      <div>
        <LoadingAnimation />
      </div>
    );

  const certification = (movieInfo.content_ratings?.results || []).find(
    (result) => result.iso_3166_1 === "US",
  )?.rating;

  const crews = (movieInfo.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ["Director", "Writer"].some((job) => jobs.find((j) => j === job));
    })

    .map((crew) => ({ id: crew.id, job: crew.jobs[0].job, name: crew.name }));

  return (
    <div>
      <Banner
        mediaInfo={movieInfo}
        certification={certification}
        crews={crews}
        trailerKey={
          (movieInfo.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />

      <div className="bg-black text-[1.2vw] text-white">
        <div className="container">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.aggregate_credits?.cast || []} />

            <SessionList sessions={(movieInfo["seasons"] || []).reverse()} />
            <RelativeMediaList mediaList={relatedMovies} />
          </div>

          <div className="flex-[1]">
            <TVShowInfomation tvInfo={movieInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowDetail;
