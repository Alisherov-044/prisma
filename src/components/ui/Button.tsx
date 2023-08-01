import { FC } from "react";
import { ButtonProps } from "../types";

export const Button: FC<ButtonProps> = ({ text, children, ...rest }) => {
  return <button {...rest}>{text ? text : children}</button>;
};
