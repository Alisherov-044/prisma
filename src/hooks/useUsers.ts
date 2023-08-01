import useSwr from "swr";
import { USERS_URL, fetcher } from "@/helpers";

export function useUsers() {
  const { data, error, isLoading } = useSwr<UserProps[]>(USERS_URL, fetcher);

  return { data, error, isLoading };
}
