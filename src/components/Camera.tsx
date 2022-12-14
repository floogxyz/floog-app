import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import WalletNav from "../components/WalletNav";
import Sidebar from "../components/Sidebar";
import Webcam from "react-webcam";
import { CameraContext } from "../context/CameraContext";
import { useCamera } from "../context/CameraContext";
function Camera() {
  const setCameraDone = useCamera();
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const webcamRef = useRef<any>(null);
  const [screenshot, setScreenshot] = useState<string | null>();

  const cameraHandler = () => {
    setShowCamera(true);
  };

  const screenshotHandler = () => {
    setScreenshot(webcamRef?.current?.getScreenshot());
  };

  useEffect(() => {
    if (screenshot) {
      console.log(screenshot);
    }
  }, [screenshot]);

  return (
    <div className="main-container">
      <WalletNav />
      <Sidebar />
      {showCamera ? (
        <>
          {screenshot ? (
            <div className="screenshot-container">
              <img
                className="screenshot-image"
                alt="screenshot"
                src={screenshot}
              />
              <div className="screenshot-buttons">
                <button
                  className="redo-btn"
                  onClick={() => {
                    setScreenshot(null);
                  }}
                >
                  take another
                </button>
                <button
                  onClick={() => setCameraDone(true)}
                  className="send-btn"
                >
                  send
                </button>
              </div>
            </div>
          ) : (
            <div className="webcam-container">
              <Webcam ref={webcamRef} className="webcam" />
              <button className="capture-btn" onClick={screenshotHandler}>
                capture
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="content-container">
          <h4 className="desc">Send a photo</h4>
          <button onClick={cameraHandler} className="cheese-btn">
            say cheese ????
          </button>
        </div>
      )}
    </div>
  );
}

export default Camera;
