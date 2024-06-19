import { useState, useEffect } from "react";
import CardModal from "./cardModal";
function KudosCard() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCreateButtonClicked = () => {
    setModalOpen(true);
  };
  return (
    <div>
      <button onClick={handleCreateButtonClicked}>Create Cards</button>
      <CardModal isOpenBool={isModalOpen} />
    </div>
  );
}

export default KudosCard;
