import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img src={process.env.PUBLIC_URL + "/logo-small.png"} />
      <div className="header-text">
        <h1>The Shoppies</h1>
        <h2>Nominate your favourite movies!</h2>
      </div>
    </div>
  );
};

export default Header;
