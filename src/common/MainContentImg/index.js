import React from "react";
import Button from "../Button";

const MainContentImg = ({
  headingOne,
  headingTwo,
  detailOne,
  detailTwo,
  detailThree,
  sideImg,
}) => {
  return (
    <div className="main-content-container">
      <div className="main-content-left">
        <h1 className="main-content-heading">
          {headingOne} <br /> {headingTwo && headingTwo}
        </h1>
        <p className="main-content-detail-text">{detailOne}</p>
        <p className="main-content-detail-text">{detailTwo}</p>

        {detailThree && (
          <p className="main-content-detail-text">{detailThree}</p>
        )}
        <div className="main-content-btns">
          <Button className="primary" btnText="Get Started Now" />
          <p className="main-content-learn-btn">Learn More</p>
        </div>
      </div>
      <div className="main-content-right">
        <img src={sideImg} className="side-img" alt="side img" />
      </div>
    </div>
  );
};

export default MainContentImg;
