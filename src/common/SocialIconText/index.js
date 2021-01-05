import React from "react";

const SocialIconText = ({ icon, text, active }) => {
  return (
    <div className="social-icon-text-container">
      <img src={icon} alt="icon" className="social-icon" />
      <p className={active ? "active-soical-text" : "soical-text"}>{text}</p>
    </div>
  );
};

export default SocialIconText;
