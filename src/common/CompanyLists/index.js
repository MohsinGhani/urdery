import React from "react";
import CompanyOne from "../../assets/images/company-1.png";
import CompanyTwo from "../../assets/images/company-2.png";
import CompanyThree from "../../assets/images/company-3.png";
import CompanyFour from "../../assets/images/company-4.png";
import CompanyFive from "../../assets/images/company-5.png";
import CompanySix from "../../assets/images/company-6.png";

const CompanyLists = () => {
  return (
    <div className="company-img-list">
      <img src={CompanyOne} className="company-img" alt="comapny img" />
      <img src={CompanyTwo} className="company-img" alt="comapny img" />
      <img src={CompanyThree} className="company-img" alt="comapny img" />
      <img src={CompanyFour} className="company-img" alt="comapny img" />
      <img src={CompanyFive} className="company-img" alt="comapny img" />
      <img src={CompanySix} className="company-img" alt="comapny img" />
    </div>
  );
};

export default CompanyLists;
