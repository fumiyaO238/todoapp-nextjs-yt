"use client";

import { deleteTodo, editTodo } from "@/api";
import { Todo } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

type TodoRowProps = {
  todo: Todo;
};
const TodoRow = ({ todo }: TodoRowProps) => {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editTodoTitle, setEditedTodoTitle] = useState<string>(todo.text);

  useEffect(() => {
    if (isEditMode) {
      ref.current?.focus();
    }
  }, [isEditMode]);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = async (id: string) => {
    if (!editTodoTitle) {
      return alert("タスク名を入力してください");
    }

    const editedTodo = {
      id: id,
      text: editTodoTitle,
    };

    await editTodo(editedTodo);
    router.refresh();
    setIsEditMode(false);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    router.refresh();
  };

  return (
    <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
      {isEditMode ? (
        <input
          ref={ref}
          type="text"
          className="mr-2 px-2 py-1 rounded border-gray-400 border"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedTodoTitle(e.target.value)
          }
          value={editTodoTitle}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {isEditMode ? (
          <>
            <button
              className="text-gray-500 mr-3"
              onClick={() => setIsEditMode(false)}
            >
              キャンセル
            </button>
            <button
              className="text-blue-500"
              onClick={() => handleSave(todo.id)}
            >
              確定
            </button>
          </>
        ) : (
          <>
            <button
              className="text-green-500 mr-3"
              onClick={() => handleEdit()}
            >
              編集
            </button>
            <button className="text-red-500" onClick={handleDelete}>
              削除
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoRow;
