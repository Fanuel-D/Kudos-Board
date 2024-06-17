import "../styles/modal.css";
// import PropTypes from "prop-types";
function Modal({ isOpenBool, isClosedFunc }) {
  //   const handleModalClicked = (e) => {
  //     e.stopPropagation();
  //   };
  return (
    <div>
      {isOpenBool && (
        <div className="modalBackDrop">
          <div className="modalContent">
            <form action="">
              <label htmlFor="">Title</label>
              <input style={{ border: "solid black 1px" }} type="text" />
              <label htmlFor="">Category</label>
              <select name="" id="" defaultValue="select">
                <option value="select" disabled>
                  Select Category
                </option>
                <option value="recent">Recent</option>
                <option value="celebration">Celebration</option>
                <option value="thankYou">Thank You</option>
                <option value="inspiration">Inspiration</option>
              </select>
              <label htmlFor="">Author</label>
              <input style={{ border: "solid black 1px" }} type="text" />
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
