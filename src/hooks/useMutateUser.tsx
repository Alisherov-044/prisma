import { USERS_URL, fetcher } from "@/helpers";
import { useSWRConfig } from "swr";

export function useMutateUser() {
  const { mutate } = useSWRConfig();

  const mutateUser = (method: MethodProps, data: {}) => {
    mutate(
      USERS_URL,
      fetcher(USERS_URL, {
        method,
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
    );
  };

  return { mutateUser };
}
