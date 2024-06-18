import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import KudosCard from "./kudosBoard";
import "../styles/App.css";
import Modal from "./modal.jsx";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [boards, setBoards] = useState([]);
  const handleClosed = (event) => {
    event.stopPropagation();
    setModalOpen(false);
  };

  const handleFormSubmit = (curr) => {
    setSearchQuery(curr);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/boards/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete the pet.");
        }

        setBoards(boards.filter((board) => board.id !== id));
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Failed to delete pet. Please try again later.");
      });
  };

  useEffect(() => {
    let URL = "http://localhost:3000/boards";
    if (searchQuery != "") {
      URL = `http://localhost:3000/boards/search?boardName=${searchQuery}`;
    }
    fetch(URL, { method: "GET" })
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
  }, [boards, searchQuery]);

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <header className="appHeader">
        <h1 className="nameOfSite" style={{ marginLeft: "20px" }}>
          Kudos Board
        </h1>
        <SearchForm className="searchForm" formUpdate={handleFormSubmit} />
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
          return (
            <KudosCard
              key={board.boardId}
              board={board}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
      <footer className="appFooter">Designed by Fanuel Dana</footer>
    </div>
  );
}

export default App;
