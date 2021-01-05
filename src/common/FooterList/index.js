import React from "react";

const FooterList = ({ listHeading, lists }) => {
  return (
    <ul className="footer-list-section">
      <h3 className="footer-list-heading">{listHeading}</h3>
      {lists.map((list, key) => (
        <li className="footer-list" key={key}>
          {list}
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
