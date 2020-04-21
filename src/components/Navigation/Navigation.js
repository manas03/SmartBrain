import React from "react";

const Navigation = ({ onRouteChange, signedIn }) => {
  if (signedIn) {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0px 5px"
        }}
      >
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim black pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0px 5px"
        }}
      >
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black pa3 pointer"
        >
          Log In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim black pa3 pointer"
        >
          Sign Up
        </p>
      </nav>
    );
  }
};

export default Navigation;
