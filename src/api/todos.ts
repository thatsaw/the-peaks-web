import type { QueryClient } from "@tanstack/react-query";
import { fetcher } from "../utils/fetcher";

export type Todo = {
  id: number;
  title: string;
};

export async function todoList(q?: string) {
  const todos: Todo[] = await fetcher({
    url: `https://jsonplaceholder.typicode.com/todos?${q}`,
  });

  return { todos };
}

export function todoListQuery(q?: string) {
  return {
    queryKey: ["todos", "list", q ?? "all"],
    queryFn: () => todoList(q),
  };
}

export const loader =
  (queryClient: QueryClient) =>
  // TODO: Replace any with a type
  async ({ request }: any) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");

    if (q && !queryClient.getQueryData(todoListQuery(q).queryKey)) {
      await queryClient.fetchQuery(todoListQuery(q));
    }

    return { q };
  };
