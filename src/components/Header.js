import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import UserContext from "../../utils/UserContext";

const loggedInUser = () => {
  // API call to check authentication
  return false;
};

// * SPA - Single Page Application
/*
 * Client Side Routing
 * Server Side Routing
 */

const Title = () => {
  return (
    <a href="/">
      <img
        className="h-28 p-2"
        src="https://scontent.fdel1-4.fna.fbcdn.net/v/t39.30808-6/302275887_487537640050648_5998956273504369200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=y7Cac0hyKP4AX9-v3qG&_nc_ht=scontent.fdel1-4.fna&oh=00_AfAYiqpRILouTe_MNow4p2UJwmnJFCoVqoiMQ3lEA1r96A&oe=64B3F82E"
        alt="logo"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">Cart</li>
        </ul>
      </div>

      <h1>{isOnline ? "🟢" : "🔴"}</h1>
      <span className="p-10 font-bold text-red-900">{user.name} - {user.email}</span>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
