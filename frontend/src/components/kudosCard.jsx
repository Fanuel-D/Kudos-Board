function KudosCard({ card, handleDelete }) {
  const deleteClicked = (e) => {
    e.stopPropagation();
    handleDelete(card.cardId);
  };
  return (
    <div>
      <img src="" alt="there is a gif here" />
      <div>
        <p>{card.cardTitle}</p>
        <p>{card.message}</p>
        <p>{card.author}</p>
      </div>
      <button
        style={{ backgroundColor: "blue" }}
        className="deleteBoard"
        onClick={deleteClicked}
      >
        Delete Board
      </button>
    </div>
  );
}

export default KudosCard;
