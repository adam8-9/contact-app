import React from "react";
import "./App.css";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const { removeContactHandler, contacts } = props;
  // const contacts = [{id:'1',name:'adam',email:'adam@adam'}]

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        deleteHandler={removeContactHandler}
      ></ContactCard>
    );
  });

  return (
    <div className="main margin">
      <section style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ width: "85%" }}>Contact List</h2>
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </section>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
