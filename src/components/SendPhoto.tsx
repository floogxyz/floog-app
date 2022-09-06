import React from "react";
import "../styles/SendPhoto.css";
function SendPhoto() {
  return (
    <div className="modal-container">
      <h3 className="select-address">select an address</h3>
      <div className="input-container">
        <input type="text" className="input-addr" />
        <button className="send-btn">send</button>
      </div>
    </div>
  );
}

export default SendPhoto;
