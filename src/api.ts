import { Todo } from "./types";

export const getAllTodos = async (): Promise<Todo[]> => {
  const res = await fetch("http://localhost:3001/tasks", {
    cache: "no-store" // SSR
  });
  const todos = res.json();

  return todos;
};
