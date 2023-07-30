import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import icon from "../assets/Image/krish1.jpeg";
// import icon from "../assets/Image/photo.png";
const NavBar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <main className="p-2 max-screen-sm mx-auto ">
      <header className="flex justify-center mb-2 items-center">
        <img
          src={icon}
          className="max-h-10 rounded-full object-cover"
          alt=""
          srcset=""
        />
        <Link to="/" className="font-bold text-4xl font-mono">
          K-Bytes.
        </Link>
        <nav className="flex gap-2 absolute right-2 font-serif">
          {username && (
            <>
              <Link to="/create">New Post</Link>
              <a onClick={logout} className="cursor-pointer">
                Logout
              </a>
            </>
          )}
          {!username && <Link to="/login">LogIn</Link>}
          {/* <div>dark</div> */}
        </nav>
      </header>
      <hr></hr>
    </main>
  );
};

export default NavBar;
