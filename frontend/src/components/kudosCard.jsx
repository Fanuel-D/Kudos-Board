import "../styles/kudosCard.css";
function KudosCard({ card, handleDelete }) {
  const voteCount = 0;
  const deleteClicked = (e) => {
    e.stopPropagation();
    handleDelete(card.cardId);
  };
  return (
    <div className="kudosCard">
      <img className="cardGif" src={card.gif} alt="there is a gif here" />
      <div>
        <p>{card.cardTitle}</p>
        <p>{card.message}</p>
        <p>{card.author}</p>
      </div>
      <div className="cardButtons">
        <button
          style={{ backgroundColor: "dark", height: "25px" }}
          className="deleteBoard"
          onClick={deleteClicked}
        >
          Delete Board
        </button>
        <button style={{ backgroundColor: "dark", height: "25px" }}>
          Upvote: {voteCount}
        </button>
      </div>
    </div>
  );
}

export default KudosCard;
