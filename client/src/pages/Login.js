import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";
// import { MYSITE } from "../../../server/config/keys";

// const MYSITE = "http://localhost:4000";
const MYSITE = "http://k-bytes-server.vercel.app";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch(MYSITE + "/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="grid place-content-center mt-10 p-2 ">
      <div className="sm:w-80 p-3 bg-gray-200 rounded-md">
        <h1 className="text-center text-2xl pb-2">Login</h1>
        <form className="flex flex-col py-2" onSubmit={login}>
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
            Login
          </button>
        </form>
        <p>Have't Account Previously ? </p>
        <Link to="/register" className="text-blue-800">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
