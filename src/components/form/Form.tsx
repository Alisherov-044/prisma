import { FC, forwardRef } from "react";
import { FormProps } from "../types";

export const Form: FC<FormProps & any> = forwardRef(({ onSubmit, children, ...rest }, ref) => (
    <form onSubmit={onSubmit} {...rest} ref={ref}>
      {children}
    </form>
))
