import { useEffect, useState } from "react";
import "../styles/kudosCard.css";
function KudosCard({ id, card, handleDelete }) {
  const [voteCount, setVoteCount] = useState(card.voteCount);

  const handleVoteClicked = () => {
    let newCount = voteCount + 1;
    fetch(`http://localhost:3000/boards/${id}/${card.cardId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ voteCount: newCount }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to update board.");
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setVoteCount(newCount);
  };

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
        <button
          onClick={handleVoteClicked}
          style={{ backgroundColor: "dark", height: "25px" }}
        >
          Upvote: {card.voteCount}
        </button>
      </div>
    </div>
  );
}

export default KudosCard;
