import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import KudosCard from "./kudosBoard";
import "../styles/App.css";
import Modal from "./modal.jsx";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [boards, setBoards] = useState([]);
  const handleClosed = (event) => {
    event.stopPropagation();
    setModalOpen(false);
  };
  useEffect(() => {
    fetch(`http://localhost:3000/boards`, { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response failed");
        }
        return response.json();
      })
      .then((data) => {
        setBoards(data);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }, []);

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
        {boards.map((board) => {
          return <KudosCard board={board} />;
        })}
      </div>
      <footer className="appFooter">Designed by Fanuel Dana</footer>
    </div>
  );
}

export default App;
