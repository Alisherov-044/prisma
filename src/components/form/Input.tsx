import { FC, ComponentProps } from "react";

export const Input: FC<ComponentProps<"input">> = ({
  name,
  placeholder,
  type = "text",
  ...rest
}) => {
  return <input type={type} name={name} placeholder={placeholder} {...rest} />;
};
