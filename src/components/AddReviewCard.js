import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { RxCrossCircled } from "react-icons/rx";
import { DataContext } from "../contexts/DataContext";

function AddReviewCard({ restaurantId }) {
  const { addReviewToRestaurant } = useContext(DataContext);

  const [isOpen, setIsOpen] = useState(false);

  const [newReview, setNewReview] = useState({
    rating: "",
    comment: "",
    revName: "Madhu",
    pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
  });

  const saveHandler = () => {
    // newReview.comment === "" &&
    //   setNewReview((prev) => ({ ...prev, comment: "Random Comment" }));
    // newReview.rating === "" &&
    //   setNewReview((prev) => ({ ...prev, rating: 2.9 }));
    addReviewToRestaurant(restaurantId, newReview);
    setIsOpen(false);
    setNewReview({
      rating: "",
      comment: "",
      revName: "Madhu",
      pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
    });
  };

  const cancelHandler = () => {
    setNewReview({
      rating: "",
      comment: "",
      revName: "Madhu",
      pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
    });
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#ef4f5f",
      color: "#fff",
      width: "25rem",
    },
  };

  Modal.setAppElement("body");

  return (
    <div>
      <div className="flex-column-center-center">
        <button
          className="primary-button"
          onClick={() => {
            openModal();
          }}
        >
          Add Review
        </button>
      </div>
      <Modal isOpen={isOpen} style={customStyles}>
        <div>
          <div>
            <RxCrossCircled
              className="go-back-icon"
              onClick={() => {
                cancelHandler();
              }}
            />
            <h1 className="text-align-center">Add Your Review</h1>
            <hr className="white-color" />
            <div>
              <label>
                Rating:{" "}
                <input
                  type="number"
                  onChange={(e) => {
                    setNewReview((prev) => ({
                      ...prev,
                      rating: parseInt(e.target.value),
                    }));
                  }}
                  value={newReview.rating}
                />
              </label>
            </div>
            <div>
              <label>
                Comment:{" "}
                <input
                  type="text"
                  onChange={(e) => {
                    setNewReview((prev) => ({
                      ...prev,
                      comment: e.target.value,
                    }));
                  }}
                  value={newReview.comment}
                />
              </label>
            </div>
            <button
              onClick={() => {
                saveHandler();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddReviewCard;
