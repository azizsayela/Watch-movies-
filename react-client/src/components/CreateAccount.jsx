import React from "react";
import { useState } from "react";
import axios from "axios";
const Signup = (props) => {
  const [email, seteamil] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const singUpRequest = (email, username, password) => {
    axios
      .post("http://localhost:3000/api/films/sign-up", {
        email: email,
        username: username,
        password: password,
      })
      .then((result) => {
        console.log("user added");
      });
  };

  return (
    <div className="Login" style={{ "margin-top": "105px" }}>
      <input
        className="create-input"
        placeholder="enter email"
        onChange={(e) => {
          seteamil(e.target.value);
          console.log(email);
        }}
      ></input>
      <input
        className="create-input"
        placeholder="enter Username"
        onChange={(e) => {
          setusername(e.target.value);
          console.log(username);
        }}
      ></input>
      <input
        type="password"
        className="create-input"
        placeholder="enter Password"
        onChange={(e) => {
          setpassword(e.target.value);
          console.log(password);
        }}
      ></input>

      <button
        className="log-btn"
        onClick={() => {
          console.log(email, username, password);
          singUpRequest(email, username, password);
        }}
      >
        Create account
      </button>
    </div>
  );
};

export default Signup;
