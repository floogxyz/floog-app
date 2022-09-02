import React from "react";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="inbox">
        <span>📬</span>
        <p className="inbox-text">Inbox</p>
      </div>
    </div>
  );
}

export default Sidebar;
