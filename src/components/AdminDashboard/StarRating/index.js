import React from "react";
import StarRatings from "../../../../node_modules/react-star-ratings";

const StarRating = ({ ratingStar }) => {
  return (
    <div className="star-rating-container">
      <StarRatings
        rating={ratingStar}
        starDimension="20px"
        starSpacing="5px"
        starRatedColor="#FED234"
      />
      <p className="star-rating-text">{ratingStar} out of 5</p>
    </div>
  );
};

export default StarRating;
