import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { todoListQuery } from "../api/todo";
import { Counter } from "../components/Counter";
import { Spinner } from "../components/Spinner";

type LoaderData = {
  q?: string;
};

export function Home() {
  const { q } = useLoaderData() as LoaderData;
  const { data: todos, isLoading } = useQuery(todoListQuery(q));

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {todos?.todos.length ? (
        <ul>
          {todos.todos.map((todo) => (
            <li key={todo.id}>
              {todo.id}: {todo.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>Nothing to do here...</i>
        </p>
      )}
      <Counter />
    </>
  );
}
