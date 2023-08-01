import { FC } from "react";
import { ModalProps } from "../types";
import { Backdrop } from "..";

export const Modal: FC<ModalProps> = ({ onClose, children }) => {
  return (
    <Backdrop onClose={onClose}>
      <div className="modal">{children}</div>
    </Backdrop>
  );
};
