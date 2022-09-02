import React from "react";
import "../styles/Sidebar.css";
import Logo from "../assets/img/logo.svg";
function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="inbox">
        <img height={40} src={Logo} />
      </div>
    </div>
  );
}

export default Sidebar;
