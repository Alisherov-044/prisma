import { FC } from "react";
import { UsersListProps } from "../types";
import { List } from "..";

export const UsersList: FC<UsersListProps> = ({
  array,
  Component,
  ...rest
}) => {
  return (
    <div className="users__list">
      <List array={array} Component={Component} {...rest} />
    </div>
  );
};
