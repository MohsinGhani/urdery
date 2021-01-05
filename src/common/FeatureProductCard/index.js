import React from "react";

const FeatureProductCard = ({ productImg, productHeading, productDetail }) => {
  return (
    <div className="feature-card-container">
      <div className="feature-card-img-section">
        <img
          src={productImg}
          alt="feature-card-img"
          className="feature-card-img"
        />
      </div>
      <div className="feature-product-detail-section">
        <h1 className="feature-product-heading">{productHeading}</h1>
        <p className="feature-product-text">{productDetail}</p>
      </div>
    </div>
  );
};

export default FeatureProductCard;
