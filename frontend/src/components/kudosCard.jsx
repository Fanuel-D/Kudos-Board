import { useState, useEffect } from "react";
import CardModal from "./cardModal";
import { useParams } from "react-router-dom";
import "../styles/kudosCard.css";

function KudosCard() {
  const { id } = useParams();
  const [cards, setCards] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const isClosedFunc = () => {
    setModalOpen(false);
  };

  const handleCreateButtonClicked = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    const URL = `http://localhost:3000/boards/${id}`;
    fetch(URL, { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response failed");
        }
        return response.json();
      })
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }, [cards]);

  return (
    <div>
      <button onClick={handleCreateButtonClicked}>Create Cards</button>
      <div className="singleCard">
        <p>{cards.cardTitle}</p>
        <p>{cards.message}</p>
        <p>{cards.author}</p>
      </div>
      <CardModal isOpenBool={isModalOpen} isClosedFunc={isClosedFunc} id={id} />
    </div>
  );
}

export default KudosCard;
