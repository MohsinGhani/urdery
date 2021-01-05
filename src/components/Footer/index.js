import React from "react";
import LayoutWrapper from "../../common/LayoutWrapper";
import FooterLogo from "../../assets/images/footer-logo.png";
import FooterList from "../../common/FooterList";

const Footer = () => {
  const data = [
    {
      listHeading: "FEATURES",
      lists: [
        "Online Ordering",
        "Sell merchandise",
        "Sell gift cards",
        "Catering",
      ],
    },
    {
      listHeading: "PRICING",
      lists: ["Online Ordering", "Charge"],
    },
    {
      listHeading: "SUPPORT",
      lists: ["Online Support", "Our Phone Number", "Email Form"],
    },
    {
      listHeading: "GET STARTED",
      lists: ["Sign In", "Register"],
    },
  ];
  return (
    <footer className="footer-container">
      <LayoutWrapper>
        <div className="mx5">
          <div className="footer-top-section">
            {data.map((item, key) => (
              <FooterList
                listHeading={item.listHeading}
                lists={item.lists}
                key={key}
              />
            ))}
          </div>
          <div className="footer-bottom-section">
            <img src={FooterLogo} alt="footer-logo" className="footer-logo" />
            <ul className="footer-bottom-list">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </LayoutWrapper>
    </footer>
  );
};

export default Footer;
