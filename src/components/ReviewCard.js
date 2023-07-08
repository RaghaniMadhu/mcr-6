import React from "react";
import { AiOutlineStar } from "react-icons/ai";

function ReviewCard({ reviewDetails: { rating, comment, revName, pp } }) {
  return (
    <div>
      <div className="flex-row justify-content-space-between">
        <div className="flex-column">
          <div className="flex-row gap-point-5 profile-photo-name-div">
            <img src={pp} alt={revName} className="profile-photo" />
            <h4 className="margin-block-0">{revName}</h4>
          </div>
          <p className="margin-block-0">{comment}</p>
        </div>
        <div className="flex-row ratings-star-div">
          <p className="margin-block-0 flex-row-center-center">{rating}</p>
          <AiOutlineStar className="icons" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ReviewCard;
