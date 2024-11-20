import { Todo } from "./types";

export const getAllTodos = async (): Promise<Todo[]> => {
  const res = await fetch("http://localhost:3001/tasks", {
    cache: "no-store", // SSR
  });
  const todos = await res.json();

  return todos;
};

export const addTodo = async (todo: Todo): Promise<Todo> => {
  const res = await fetch("http://localhost:3001/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();

  return newTodo;
};

export const editTodo = async (todo: Todo): Promise<Todo> => {
  const res = await fetch(`http://localhost:3001/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: todo.text }),
  });
  const updatedTodo = await res.json();

  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<Todo> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deleteTodo = await res.json();

  return deleteTodo;
};
