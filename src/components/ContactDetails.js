import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactDetails = (props) => {
  const { id, name, email } = props.contact;
  const { deleteHandler } = props;
  console.log(props);

  return (
    <div className="item" style={{ display: "flex", alignItems: "center" }}>
      <div className="content" style={{ width: "99%" }}>
        <Link to={`/contact/${id}`}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ width: "1%", color: "red" }}
        onClick={() => deleteHandler(id)}
      ></i>
    </div>
  );
};

export default ContactDetails;
