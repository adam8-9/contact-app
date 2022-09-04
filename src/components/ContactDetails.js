import React from "react";
import { useLocation } from "react-router-dom";
//import user from "../images/user2.jpg";

const ContactDetails = (props) => {
  const location = useLocation();
  console.log(location.state.contact);
  const { name, email } = location.state.contact;

  return (
    <div className="item margin">
      <div className="ui card centered">
        <div className="image">
          <img src={require("../images/user2.jpg").default} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
