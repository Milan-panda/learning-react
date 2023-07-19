import React, { useState } from "react";

const loggedInUser = () => {
  // API call to check authentication
  return false;
};

const Title = () => {
  return (
    <>
      <a href="/">
        <img
          className="logo"
          src="https://scontent.fdel1-4.fna.fbcdn.net/v/t39.30808-6/302275887_487537640050648_5998956273504369200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=y7Cac0hyKP4AX9-v3qG&_nc_ht=scontent.fdel1-4.fna&oh=00_AfAYiqpRILouTe_MNow4p2UJwmnJFCoVqoiMQ3lEA1r96A&oe=64B3F82E"
          alt="logo"
        />
      </a>
    </>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Name</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
