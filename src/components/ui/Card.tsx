import { FC } from "react";
import { CardProps } from "../types";

export const Card: FC<CardProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};
