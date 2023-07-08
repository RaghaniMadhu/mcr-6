import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { DataContext } from "../contexts/DataContext";
import ReviewCard from "../components/ReviewCard";

function Restaurant() {
  const { restaurantId } = useParams();

  const { restaurantsData } = useContext(DataContext);

  const requiredRestaurant = restaurantsData.find(
    ({ id }) => id.toString() === restaurantId
  );

  const averageRating =
    requiredRestaurant.ratings.reduce((acc, { rating }) => acc + rating, 0) /
    requiredRestaurant.ratings.length;

  const averageRatingRoundedOff =
    Math.round((averageRating + Number.EPSILON) * 100) / 100;

  const navigate = useNavigate();

  return (
    <div className="flex-column restaurant-page">
      <AiOutlineArrowLeft
        className="go-back-icon"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="flex-column-center-center">
        <div className="restaurant-card">
          {/* Restaurant Name, Items, Address, Ratings Div */}
          <div className="flex-row justify-content-space-between">
            <div className="flex-column">
              <p className="margin-block-0 font-size-xx-large">
                {requiredRestaurant.name}
              </p>
              <p className="gray-color margin-block-0">
                {requiredRestaurant.menu.map(({ name }) => name).join(", ")}
              </p>
              <p className="gray-color margin-block-0">
                {requiredRestaurant.address}
              </p>
              <p className="gray-color margin-block-0">{`Average Rating: ${averageRatingRoundedOff}`}</p>
            </div>
            <div className="flex-column-center-center">
              <button className="primary-button">Add Review</button>
            </div>
          </div>
          <hr />
          {/* Review Div */}
          <div>
            <h3>Reviews</h3>
            {requiredRestaurant.ratings.map((review) => (
              <ReviewCard key={review.revName} reviewDetails={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
