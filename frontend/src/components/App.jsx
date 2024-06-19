import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import KudosBoard from "./kudosBoard";
import KudosCard from "./kudosCard";
import "../styles/App.css";
import Modal from "./modal.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewClicked, setViewClicked] = useState(false);
  const [boards, setBoards] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleClosed = (event) => {
    event.stopPropagation();
    setModalOpen(false);
  };

  const handleFormSubmit = (curr) => {
    setSearchQuery(curr);
  };
  const handleViewClicked = () => {};

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
    let URL = `http://localhost:3000/boards?filter=${filter}`;
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
  }, [boards, searchQuery, filter]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App" style={{ textAlign: "center" }}>
              <header className="appHeader">
                <h1 className="nameOfSite" style={{ marginLeft: "20px" }}>
                  Kudos Board
                </h1>
                <SearchForm
                  className="searchForm"
                  formUpdate={handleFormSubmit}
                />
                <div>
                  <button onClick={() => setFilter("all")}>All</button>
                  <button onClick={() => setFilter("recent")}>Recent</button>
                  <button onClick={() => setFilter("celebration")}>
                    Celebrations
                  </button>
                  <button onClick={() => setFilter("thankYou")}>
                    Thank You
                  </button>
                  <button onClick={() => setFilter("inspiration")}>
                    Inspiration
                  </button>
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
                <div className="innerBodyPart">
                  {boards.map((board) => {
                    return (
                      <KudosBoard
                        key={board.boardId}
                        board={board}
                        handleDelete={handleDelete}
                      />
                    );
                  })}
                </div>
              </div>
              {/* <footer className="appFooter">Designed by Fanuel Dana</footer> */}
            </div>
          }
        />
        <Route path="/boards/:id" element={<KudosCard />} />
      </Routes>
    </Router>
  );
}

export default App;
