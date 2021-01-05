import React from "react";
import Button from "../Button";

const PricingDetailCard = ({ type, facilitiesList, price }) => {
  return (
    <div className="pricing-detail-container">
      <div className="pricing-detail-tab">{type}</div>
      <div className="pricing-detail-card">
        {facilitiesList.map((list, key) => (
          <ul className="pricing-detail-list" key={key}>
            <li>{list}</li>
          </ul>
        ))}

        <div className="bottom-btn">
          <Button
            className="primary"
            btnText={
              <span>
                Start now For {price.length ? "only" : "free"}{" "}
                <span className="price-text">{price}</span>
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PricingDetailCard;
