import React from "react";
import MsgBoxImg from "../../common/MsgBoxImg";
import Avater from "../../assets/images/msg-avter.jpg";
import InputField from "../../common/InputField";

const ChatBox = () => {
  return (
    <div className="chat-box-container">
      {chats.map((item, key) => (
        <MsgBoxImg avater={item.img} msg={item.text} key={key} />
      ))}
      <div className="chat-box-input-section">
        <InputField type="text" placeholder="Type here....." />
      </div>
    </div>
  );
};

export default ChatBox;

const chats = [
  {
    img: Avater,
    text: "Good morning! Anna is here how can I help you sir?",
  },
  {
    img: Avater,
    text: "Hi! I need help with my program.",
  },
];
