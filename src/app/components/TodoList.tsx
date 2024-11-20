import { Todo } from "@/types";
import React from "react";
import TodoRow from "./TodoRow";

type TodoListProps = {
  todos: Todo[];
};
const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="space-y-3">
      {todos.map((t) => (
        <TodoRow todo={t} key={t.id} />
      ))}
    </ul>
  );
};

export default TodoList;
