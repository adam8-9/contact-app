import React from "react";
import { useLocation, Link } from "react-router-dom";
import user from "../images/user2.jpg";

const ContactDetails = (props) => {
  const location = useLocation();
  console.log(location.state.contact);
  const { name, email } = location.state.contact;

  return (
    <div className="item margin">
      <div className="ui card centered">
        <div className="image">
          <img src={user} height={100} width={100} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center">
        <Link to="/">
          <button className="ui button blue center">
            Back to contact list
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
