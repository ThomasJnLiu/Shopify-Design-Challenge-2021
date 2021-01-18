import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img src={process.env.PUBLIC_URL + "/logo-small.png"} />
      <div className="header-text">
        <div>
          <h1>The Shoppies</h1>
          <h2>Nominate your favourite movies!</h2>
        </div>

        <div className="header-project-info">
          <p>
            Made by Thomas Liu for Shopify's Summer 2021 Intern Design Challenge
          </p>
          <a
            target="_blank"
            href="https://github.com/ThomasJnLiu/Shopify-Design-Challenge-2021"
          >
            Link to the repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
