import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { MYSITE } from "../../../server/config/keys";

// const MYSITE = "http://localhost:4000";
const MYSITE = "http://k-bytes-server.vercel.app";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch(MYSITE + "/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("registration successful");
    } else {
      alert("registration failed");
    }
  }
  return (
    <div className="grid place-content-center mt-10 p-2 ">
      <div className="sm:w-80 p-3 bg-gray-200 rounded-md">
        <h1 className="text-center text-2xl pb-2">Register</h1>

        <form className="flex flex-col py-2" onSubmit={register}>
          <label className="py-2">Username</label>
          <input
            type="text"
            placeholder="Sahoo123"
            className="border-2 border-black-500 rounded-lg p-1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="py-2">Password</label>
          <input
            type="password"
            name=""
            id=""
            placeholder="Blog@123"
            className="border-2 border-black-500  rounded-lg p-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="border-2 border-blue-300 bg-blue-200 p-1 my-4">
            Create Accout
          </button>
        </form>
        <p>Already have a account ? </p>
        <Link to="/login" className="text-blue-800">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
