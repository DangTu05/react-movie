import PropTypes from "prop-types";

const RatingInput = ({ onChange, name }) => {
  return (
    <div>
      <select name={name} id="" className="rounded border" onChange={onChange}>
        <option value="All">All</option>

        <option value="0-49">0-49</option>
        <option value="50-69">50-69</option>
        <option value="70-100">70-100</option>
      </select>
    </div>
  );
};

RatingInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default RatingInput;
