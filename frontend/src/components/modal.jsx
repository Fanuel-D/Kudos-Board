import "../styles/modal.css";
import { useState } from "react";
// import PropTypes from "prop-types";
function Modal({ isOpenBool, isClosedFunc }) {
  //   const handleModalClicked = (e) => {
  //     e.stopPropagation();
  //   };
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    image: "",
  });
  if (formData.image == "") {
    const randomNumber = Math.floor(Math.random() * 21);
    let newImage = `https://picsum.photos/200/300?random=${randomNumber}`;
    setFormData({ image: newImage });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    fetch("http://localhost:3000/boards", {
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
        onPetAdded();
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
                name="title"
                type="text"
                onChange={handleChange}
                value={formData.title}
              />
              <label htmlFor="">Category</label>
              <select
                name="category"
                id=""
                defaultValue="select"
                onChange={handleChange}
              >
                <option value="select" disabled>
                  Select Category
                </option>
                <option value="recent">Recent</option>
                <option value="celebration">Celebration</option>
                <option value="thankYou">Thank You</option>
                <option value="inspiration">Inspiration</option>
              </select>
              <label htmlFor="">Author</label>
              <input
                style={{ border: "solid black 1px" }}
                name="author"
                onChange={handleChange}
                type="text"
                value={formData.author}
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
export default Modal;
