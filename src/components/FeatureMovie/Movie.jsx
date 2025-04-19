import { useModal } from "@context/ModalContext";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Movie = (props) => {
  const { data, trailerKey } = props;

  const { backdrop_path, title, releasee_date, overview } = data;

  const { openPopup } = useModal();
  return (
    <>
      <img
        src={"https://image.tmdb.org/t/p/original" + backdrop_path}
        className="aspect-video w-full brightness-50"
        alt=""
      />
      <div className="absolute bottom-[10%] left-8 w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{title}</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="text-[2vw]">{releasee_date}</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold sm:text-[2vw]">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="mt-4 flex">
            <button
              className="mr-2 flex rounded bg-white px-4 py-2 text-center text-[1rem] text-black lg:text-lg"
              onClick={() => {
                openPopup(
                  <iframe
                    title="trailer"
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    className="aspect-video w-[50vw]"
                  />,
                );
              }}
            >
              <FontAwesomeIcon icon={faPlay} /> Trailer
            </button>
            <Link to={`/movie/${data.id}`}>
              <button className="flex rounded bg-slate-300/35 px-4 py-2 text-[1rem] text-white lg:text-lg">
                View Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
