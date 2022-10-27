import { useState } from "react";
import "./Header.css";

function Header({ isMobile }) {
  const [menuOn, setMenuOn] = useState(false);

  function getMobile() {
    return (
      <div className="Header">
        <h1 className="Title">UNX</h1>
        <div
          className="Burger"
          onClick={() => {
            setMenuOn(!menuOn);
          }}
        >
          <div>
            <div className="Line Long" />
            <div className="Line Short" />
            <div className="Line Long" />
          </div>
        </div>
        {menuOn ? (
          <div className="Menu">
            <div className="Tabs">
              <h1>Products</h1>
              <h1>About</h1>
              <h1>Resources</h1>
              <h1>Contact</h1>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }

  function getWeb() {
    return (
      <div className="Header">
        <h1 className="Title">UNX</h1>
        <div className="Tabs">
          <h1>Products</h1>
          <h1>About</h1>
          <h1>Resources</h1>
          <h1>Contact</h1>
        </div>
        <div className="DashboardButton">
          <h1>Dashboard</h1>
        </div>
      </div>
    );
  }

  return isMobile ? getMobile() : getWeb();
}

export default Header;
