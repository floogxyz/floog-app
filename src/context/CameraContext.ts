import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

export const CameraContext = createContext<Dispatch<
  SetStateAction<boolean>
> | null>(null);

export function useCamera() {
  const cameraContext = useContext(CameraContext);

  if (!cameraContext) {
    throw new Error("useTerminal must be called within TerminalProvider");
  }

  return cameraContext;
}
