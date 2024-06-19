import "../styles/kudosBoard.css";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function KudosCard({ board, handleDelete, viewClicked }) {
  const deleteClicked = (e) => {
    e.stopPropagation();
    handleDelete(board.boardId);
  };
  const imgURL = board.image;
  return (
    <div
      className="kudos-card"
      // onClick={(e) => onClickSelectedCard(movie.id, e)}
    >
      <img src={imgURL} alt="there is an image here" className="imageTag" />
      <div
        className="lowerMovieCardPart"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <p>{board.title}</p>
        <p>{board.author}</p>
        <p>{board.category}</p>
        <div className="bottomButtons">
          <Link to={"/boards/" + board.boardId}>
            <button /*onClick={viewClicked}*/ className="viewBoard">
              {" "}
              View Board
            </button>
          </Link>
          <button
            style={{ backgroundColor: "blue" }}
            className="deleteBoard"
            onClick={deleteClicked}
          >
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
{
  /* <a
href={`http://localhost:3000/boards/${board.boardId}`}
className="view-board"
> */
}
