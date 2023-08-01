import { FC, useState } from "react";
import { ModalProps, UserCardProps } from "../types";
import { Button, Card, Form, Input, Modal } from "..";
import { useMutateUser } from "@/hooks";

const EditModal: FC<
  Pick<ModalProps, "onClose"> & Pick<UserCardProps, "data">
> = ({ onClose, data }) => {
  const { id, name, email } = data;
  const { mutateUser } = useMutateUser();

  const onSubmit = (e: any) => {
    e.preventDefault();

    const [{ value: nameValue }, { value: emailValue }] = e.currentTarget;
    mutateUser("PATCH", {
      id,
      newData: { name: nameValue, email: emailValue },
    });

    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <h4>{id}</h4>
      <Form onSubmit={onSubmit}>
        <Input name="name" placeholder="Name" defaultValue={name} />
        <Input name="email" placeholder="Email" defaultValue={email} />
        <Button>Edit</Button>
      </Form>
    </Modal>
  );
};

export const UserCard: FC<UserCardProps> = ({ data, ...rest }) => {
  const { id, name, email } = data;
  const [isOpen, setIsOpen] = useState(false);
  const { mutateUser } = useMutateUser();

  const onDelete = () => {
    mutateUser("DELETE", { id });
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onEdit = () => {
    setIsOpen(true);
  };

  return (
    <Card {...rest}>
      {isOpen ? <EditModal onClose={onClose} data={data} /> : null}
      <h3>{id}</h3>
      <h3>{name}</h3>
      <h3>{email}</h3>
      <Button text="edit" onClick={onEdit} />
      <Button text="delete" onClick={onDelete} />
    </Card>
  );
};
