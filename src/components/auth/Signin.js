import React, { useState } from "react";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="container ">
      <form className="white Signin" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3"> Sign in </h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
