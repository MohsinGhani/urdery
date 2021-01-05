import React from "react";
import CompanyLists from "../../common/CompanyLists";
import MainContentImg from "../../common/MainContentImg";
import SideImg from "../../assets/images/home-main.png";

const HomePage = () => {
  return (
    <>
      <MainContentImg
        headingOne="Urdery,"
        headingTwo="Own your profits!"
        detailOne="Your own website, online ordering, sell merchs, gift cards and more."
        detailTwo="Let us handle your online ordering so you can focus on your business."
        sideImg={SideImg}
      />
      <CompanyLists />
    </>
  );
};

export default HomePage;
