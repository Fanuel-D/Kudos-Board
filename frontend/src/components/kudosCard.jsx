import "../styles/kudosCard.css";
import PropTypes from "prop-types";

function KudosCard() {
  return (
    <div
      className="kudos-card"
      // onClick={(e) => onClickSelectedCard(movie.id, e)}
    >
      <img src="" alt="there is an image here" className="imageTag" />
      <div
        className="lowerMovieCardPart"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <p>Content Goes here</p>
        <p>Type of celebration goes here</p>
        <div className="bottomButtons">
          <button className="viewBoard"> View Board</button>
          <button style={{ backgroundColor: "blue" }} className="deleteBoard">
            Delete Board
          </button>
        </div>
      </div>
    </div>
  );
}

// MovieCard.propTypes = {
//   onClickSelectedCard: PropTypes.func,
//   watchedMoviesHandler: PropTypes.func,
//   likedMoviesHandler: PropTypes.func,
//   movie: PropTypes.object,
// };

export default KudosCard;
