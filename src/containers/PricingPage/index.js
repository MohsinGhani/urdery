import React from "react";
import MainContentImg from "../../common/MainContentImg";
import SideImg from "../../assets/images/pricing-main.png";
import PricingDetailCard from "../../common/PricingDetailCard";

const PricingPage = () => {
  return (
    <div>
      <MainContentImg
        headingOne="Urdery,"
        detailOne="Simply fixed flat charge for online ordering. No commissions 
        what so ever."
        detailTwo="We will setup your menu for free."
        detailThree="POS integrations available on request."
        sideImg={SideImg}
      />
      <div className="pricing-cards">
        {pricingLists.map((list, key) => (
          <PricingDetailCard
            type={list.type}
            facilitiesList={list.facilitiesList}
            price={list.price}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;

const pricingLists = [
  {
    type: "Free",
    facilitiesList: ["Something", "Free Online ordering", "Sale on Catering"],
    price: "",
  },
  {
    type: "Free",
    facilitiesList: [
      "Something",
      "Free Online ordering",
      "Sale on Catering",
      "Sell Merchandise",
      "Free Something",
    ],
    price: "$10",
  },
  {
    type: "Free",
    facilitiesList: [
      "Something",
      "Free Online ordering",
      "Sale on Catering",
      "Sell Merchandise",
      "Free Something",
      "Free Everything",
      "Monthly Surprises",
    ],
    price: "$50",
  },
];
