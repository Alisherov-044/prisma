import { FC, useRef } from "react";
import { Button, Form, Input, UsersList } from "@/components";
import { UserCard } from "@/components/card/UserCard";
import { useMutateUser, useUsers } from "@/hooks";

const Home: FC = () => {
  const { data, isLoading } = useUsers();
  const { mutateUser } = useMutateUser();
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const [{ value: nameValue }, { value: emailValue }] = e.currentTarget;
    mutateUser("POST", { name: nameValue, email: emailValue });

    formRef.current?.reset();
  };

  return (
    <div className="container">
      <div className="row">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <UsersList
            array={data ? data : []}
            Component={UserCard}
            className="card"
          />
        )}
        <Form onSubmit={onSubmit} ref={formRef}>
          <Input name="name" placeholder="Name" />
          <Input name="email" placeholder="Email" />
          <Button>Create</Button>
        </Form>
      </div>
    </div>
  );
};

export default Home;
