import { FC } from "react";
import { BackdropProps } from "../types";

export const Backdrop: FC<BackdropProps> = ({ onClose, children }) => {
  const onCloseHandler = (e: any) => {
    if (e.target.classList.contains("backdrop")) onClose();
  };

  return (
    <div className="backdrop" onClick={onCloseHandler}>
      {children}
    </div>
  );
};
