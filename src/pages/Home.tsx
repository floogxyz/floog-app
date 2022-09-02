import React from "react";
import WalletNav from "../components/WalletNav";
import Sidebar from "../components/Sidebar";
import Logo from "../assets/img/logo.svg";
import "../styles/Home.css";
// import { useAccount } from "wagmi";
function Home() {
  //   const { address, isConnected } = useAccount();
  //   console.log(address);
  return (
    <div className="main-container">
      <WalletNav />
      <Sidebar />
      <div className="content-container">
        <img alt="logo" src={Logo} />
        <h4 className="desc">Start by sending a photo to a wallet address</h4>
        <button className="cheese-btn">say cheese 🧀</button>
      </div>
    </div>
  );
}

export default Home;
