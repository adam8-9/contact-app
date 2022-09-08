import React, { useEffect, useReact, useState } from "react";
import { Navigate, useLocation, Link } from "react-router-dom";

// class EditContact extends React.Component {
//   state = { name: "", email: "", redirect: false };
//   //   constructor(props) {
//   //     super(props);
//   //     const { id, email, name, redirect } = props.location.state.contact;
//   //     console.log(id);
//   //   }

//   edit = (e) => {
//     e.preventDefault();
//     const location = useLocation();
//     console.log(location);
//     e.preventDefault();
//     if (this.state.name === "" || this.state.email === "") {
//       alert("Please fill in all fields");
//       return;
//     }
//     console.log(this.props.location);
//     this.props.editContactHandler(this.state);
//     this.setState({ name: "", email: "", redirect: true });
//   };

//   render() {
//     return (
//       <div className="ui form margin">
//         <h2>Edit contact{console.log(this.props.location)}</h2>
//         <form className="ui form" onSubmit={this.edit}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="name"
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             ></input>
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="email"
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             ></input>
//           </div>
//           <button className="ui button blue">Edit</button>
//         </form>
//         {this.state.redirect && <Navigate to="/" replace={true} />}
//         <p>{`${this.props.state}`}</p>
//       </div>
//     );
//   }
// }

const EditContact = (props) => {
  //state = { name: "", email: "", redirect: false };
  //   constructor(props) {
  //     super(props);
  //     const { id, email, name, redirect } = props.location.state.contact;
  //     console.log(id);
  //   }
  const [state, setState] = useState({ name: "", email: "", redirect: false });

  const location = useLocation();
  console.log(location);

  const edit = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("Please fill in all fields");
      return;
    }

    props.editContactHandler(state);
    setState({ name: "", email: "", redirect: true });
  };

  return (
    <div className="ui form margin">
      <h2>Edit contact</h2>
      <form className="ui form" onSubmit={edit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={state.name}
            onChange={(e) => setState({ name: e.target.value })}
          ></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={state.email}
            onChange={(e) => setState({ email: e.target.value })}
          ></input>
        </div>
        <button className="ui button blue">Edit</button>
      </form>
      {state.redirect && <Navigate to="/" replace={true} />}
      <p>{`${props.state}`}</p>
    </div>
  );
};

export default EditContact;
