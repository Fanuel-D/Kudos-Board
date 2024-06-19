import { useState } from "react";
// import PropTypes from "prop-types";
import "../styles/cardModal.css";
function CardModal({ isOpenBool, isClosedFunc, id }) {
  const [formData, setFormData] = useState({
    cardTitle: "",
    message: "",
    author: "",
    gif: "",
  });

  if (formData.gif == "") {
    const randomNumber = Math.floor(Math.random() * 21);
    let newImage = `https://picsum.photos/200/300?random=${randomNumber}`;
    setFormData({ gif: newImage });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    fetch(`http://localhost:3000/boards/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to add pet.");
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      {isOpenBool && (
        <div className="modalBackDrop">
          <div className="modalContent">
            <form onSubmit={handleSubmit}>
              <label htmlFor="">Title</label>
              <input
                style={{ border: "solid black 1px" }}
                name="cardTitle"
                type="text"
                onChange={handleChange}
                value={formData.cardTitle}
              />
              <label htmlFor="">Author</label>
              <input
                style={{ border: "solid black 1px" }}
                name="author"
                onChange={handleChange}
                type="text"
                value={formData.author}
              />
              <label htmlFor="">Message</label>
              <input
                style={{ border: "solid black 1px" }}
                name="message"
                onChange={handleChange}
                type="text"
                value={formData.message}
              />
              <button type="submit">Submit</button>
            </form>

            <button
              className="closeButton"
              style={{ width: "40%" }}
              onClick={isClosedFunc}
            >
              {" "}
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Modal.propTypes = {
//   isOpenBool: PropTypes.bool,
//   isClosedFunc: PropTypes.func,
// };
export default CardModal;
