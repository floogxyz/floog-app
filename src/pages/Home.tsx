import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import WalletNav from "../components/WalletNav";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";
import Camera from "../components/Camera";
import { CameraContext } from "../context/CameraContext";
import SendPhoto from "../components/SendPhoto";
function Home() {
  const [cameraDone, setCameraDone] = useState<boolean>(false);
  console.log(cameraDone);
  return (
    <CameraContext.Provider value={setCameraDone}>
      <div className="main-container">
        <WalletNav />
        <Sidebar />
        {cameraDone ? <SendPhoto /> : <Camera />}
      </div>
    </CameraContext.Provider>
  );
}

export default Home;
