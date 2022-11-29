import { fetcher } from "../utils/fetcher";

export type Todo = {
  id: number;
  title: string;
};

export async function list() {
  const todos: Todo[] = await fetcher({
    url: "https://jsonplaceholder.typicode.com/todos",
  });

  return { todos };
}
