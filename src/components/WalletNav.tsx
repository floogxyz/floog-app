import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "../styles/WalletNav.css";
function WalletNav() {
  return (
    <div className="wallet-container">
      <ConnectButton showBalance={false} />
    </div>
  );
}

export default WalletNav;
