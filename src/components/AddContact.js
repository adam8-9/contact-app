import React from "react";
import { Navigate } from "react-router-dom";

class AddContact extends React.Component {
  state = { name: "", email: "", redirect: false };
  //navigate = useNavigate();

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Please fill in all fields");
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", redirect: true });
  };

  render() {
    return (
      <div className="ui form margin">
        <h2>Add contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            ></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
          </div>
          <button className="ui button blue">Add</button>
        </form>
        {this.state.redirect && <Navigate to="/" replace={true} />}
      </div>
    );
  }
}

export default AddContact;
