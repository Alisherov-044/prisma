import { ComponentProps, ReactNode } from "react";

// ui
interface ButtonProps extends Omit<ComponentProps<"button">, "text"> {
  text?: string;
}

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface ListProps {
  array: any[];
  Component: FC<any>;
  className?: string;
  onClick?: () => void;
  onHover?: () => void;
}

interface BackdropProps {
  onClose: () => void;
  children: ReactNode;
}

interface ModalProps extends BackdropProps {}

// form
interface FormProps extends ComponentProps<"form"> {}

// card
interface UserCardProps {
  data: UserProps;
}

// list
interface UsersListProps extends ListProps {}
