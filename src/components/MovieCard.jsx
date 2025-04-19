import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CicalorProgessBar from "./CicalorProgessBar";
import ImageComponent from "./Image";

const MovieCard = (props) => {
  const { media, mediaType } = props;
  console.log(media);

  return (
    <Link to={`/${mediaType === "tv" ? "tv" : "movie"}/${media.id}`}>
      <div className="relative z-0 flex h-full flex-col overflow-hidden rounded-lg border border-slate-800">
        {mediaType === "tv" && (
          <p className="absolute top-0 right-0 z-1 bg-black">TV SHOWS</p>
        )}

        <ImageComponent
          className={"w-full rounded-lg object-cover"}
          src={"https://image.tmdb.org/t/p/w500" + media.poster_path}
          width={210}
          height={300}
          alt=""
        />
        {/* <img
          className="w-full rounded-lg object-cover"
          src={"https://image.tmdb.org/t/p/w500" + media.poster_path}
          alt=""
          width={500}
        /> */}

        <div className="relative -top-[1.5vw] px-4">
          <CicalorProgessBar
            percent={Math.round(media.vote_average * 10)}
            strokeColor={media.vote_average > 5 ? "green" : "red"}
          />
          <p className="mt-2 font-bold">{media.title || media.name} </p>
          <p className="text-slate-400">
            {media.release_date || media.first_air_date}
          </p>
        </div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  media: PropTypes.object.isRequired,
  mediaType: PropTypes.oneOf(["movie", "tv"]).isRequired,
};

export default MovieCard;
