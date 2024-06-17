import { useState } from "react";
import SearchForm from "./SearchForm";
import KudosCard from "./kudosCard";
import "../styles/App.css";
import Modal from "./modal.jsx";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleClosed = (event) => {
    event.stopPropagation();
    setModalOpen(false);
  };
  console.log(isModalOpen);

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <header className="appHeader">
        <h1 className="nameOfSite" style={{ marginLeft: "20px" }}>
          Kudos Board
        </h1>
        <SearchForm className="searchForm" />
        <div>
          <button>All</button>
          <button>Recent</button>
          <button>Celebrations</button>
          <button>Thank You</button>
          <button>Inspiration</button>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="createNewBoardButton"
          style={{ width: "30%" }}
        >
          Create New Board
        </button>
      </header>

      <Modal isOpenBool={isModalOpen} isClosedFunc={handleClosed} />
      <div className="bodyPart">
        <KudosCard />
      </div>
      <footer className="appFooter">Designed by Fanuel Dana</footer>
    </div>
  );
}

export default App;
