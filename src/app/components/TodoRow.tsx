import { Todo } from "@/types";
import React from "react";

type TodoRowProps = {
  todo: Todo;
};
const TodoRow = ({ todo }: TodoRowProps) => {
  return (
    <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
      <span>{todo.text}</span>
      <div>
        <button className="text-green-500 mr-3">編集</button>
        <button className="text-red-500">削除</button>
      </div>
    </li>
  );
};

export default TodoRow;
