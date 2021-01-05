import React from "react";
import SocialIconText from "../../common/SocialIconText";
import ChatIcon from "../../assets/icons/chat.svg";
import PhoneIcon from "../../assets/icons/phone.png";
import EmailIcon from "../../assets/icons/email.png";
import ChatBox from "../../components/ChatBox";

const SupportPage = () => {
  return (
    <div className="support-page-container">
      <h1 className="support-page-heading">Contact Us</h1>

      <div className="support-page-social-icons">
        {soicalIcons.map((item, key) => (
          <SocialIconText
            icon={item.icon}
            text={item.text}
            active={item.active}
            key={key}
          />
        ))}
      </div>
      <div className="support-page-chatbox">
        <ChatBox />
      </div>
    </div>
  );
};

export default SupportPage;

const soicalIcons = [
  {
    icon: ChatIcon,
    text: "Chat Us",
    active: true,
  },
  {
    icon: PhoneIcon,
    text: "+02 1234 567",
    active: false,
  },
  {
    icon: EmailIcon,
    text: "Random@notmail.com",
    active: false,
  },
];
