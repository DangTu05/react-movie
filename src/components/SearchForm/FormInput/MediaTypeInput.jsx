const MediaTypeInput = ({ onChange, name, value }) => {
  return (
    <div className="accent-black">
      <input
        type="radio"
        name={name}
        value="movie"
        onChange={onChange}
        id="sf-type-movie"
        checked={value === "movie"}
        className="mr-1"
      />
      <label htmlFor="sf-type-movie">Movie</label> <br />
      <input
        type="radio"
        name={name}
        value="tv"
        onChange={onChange}
        id="sf-type-tv"
        checked={value === "tv"}
      />
      <label htmlFor="sf-type-tv">TV</label> <br />
    </div>
  );
};

export default MediaTypeInput;
