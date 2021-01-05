import React from "react";

const MsgBoxImg = ({ avater, msg }) => {
  return (
    <div className="msg-box-img-container">
      <img src={avater} alt="icon" className="msg-box-img" />
      <div className="msg-text-box">
        <p className="msg-text">{msg}</p>
      </div>
    </div>
  );
};

export default MsgBoxImg;
