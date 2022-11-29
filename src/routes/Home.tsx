import { useLoaderData } from "react-router-dom";
import { Counter } from "../components/Counter";
import type { Todo } from "../api/todo";

type LoaderData = {
  todos: Todo[];
};

export function Home() {
  const { todos } = useLoaderData() as LoaderData;

  return (
    <>
      <h1>The Peaks</h1>
      {todos.length ? (
        <ul>
          {todos.map((todo) => (
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
