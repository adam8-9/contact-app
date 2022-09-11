import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const { deleteHandler, editHandler } = props;
  // console.log(props);

  return (
    <div className="item" style={{ display: "flex", alignItems: "center" }}>
      <div className="content" style={{ width: "99%" }}>
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ width: "1%", color: "red", margin: "0 3rem 0 3rem" }}
        onClick={() => deleteHandler(id)}
      ></i>
      <Link to="/edit" state={{ contact: props.contact }}>
        <i
          className="edit alternate outline icon"
          style={{ width: "1%", color: "green" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
