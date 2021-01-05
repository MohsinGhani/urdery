import React from "react";
import FeatureProductCard from "../../common/FeatureProductCard";
import Product1 from "../../assets/images/feature-product-1.png";
import Product2 from "../../assets/images/feature-product-2.png";
import Product3 from "../../assets/images/feature-product-3.png";
import Product4 from "../../assets/images/feature-product-4.png";

const FeaturesPage = () => {
  return (
    <div className="my20">
      {featureProducts.map((product, key) => (
        <FeatureProductCard
          productImg={product.productImg}
          productHeading={product.productHeading}
          productDetail={product.productDetail}
          viewSide={product.viewSide}
        />
      ))}
    </div>
  );
};

export default FeaturesPage;

const featureProducts = [
  {
    productImg: Product1,
    productHeading: "Online Ordering",
    productDetail:
      "Great customer experience, easy to use menu, less steps to finish an order, customizable and branded ordering page.",
    viewSide: "left",
  },
  {
    productImg: Product2,
    productHeading: "Sell merchandise",
    productDetail:
      "have a dedicated e-commerce page to sell extras and make an extra cash.",
    viewSide: "right",
  },
  {
    productImg: Product3,
    productHeading: "Sell gift cards",
    productDetail:
      "make it easy for your customers to purchase gift cards. As easy as 1, 2, 3.",
    viewSide: "left",
  },
  {
    productImg: Product4,
    productHeading: "Catering",
    productDetail: "make catering easier for your customers.",
    viewSide: "right",
  },
];
