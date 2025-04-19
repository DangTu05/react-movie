import MovieCard from "../MovieCard";

const RelativeMediaList = ({ mediaList = [], title = "More like this" }) => {
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">{title}</p>
      <div className="grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {mediaList.map((media) => (
          <MovieCard
            key={media.id}
            media={media}
            mediaType={media.media_type}
          />
        ))}
      </div>
    </div>
  );
};

export default RelativeMediaList;
