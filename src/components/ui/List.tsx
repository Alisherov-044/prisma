import { FC } from "react";
import { ListProps } from "../types";

export const List: FC<ListProps> = ({ array, Component, ...rest }) => {
  return (
    <>
      {array.map((item, index) => (
        <Component data={item} key={index} {...rest} />
      ))}
    </>
  );
};
