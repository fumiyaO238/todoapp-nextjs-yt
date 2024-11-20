"use client";

import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";

const AddTask = () => {
  const router = useRouter();
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!newTodoTitle) {
      return alert("タスク名を入力してください");
    }

    const todo = {
      id: uuid(),
      text: newTodoTitle,
    };

    await addTodo(todo);
    router.refresh();
    setNewTodoTitle("");
  };

  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodoTitle(e.target.value)
        }
        value={newTodoTitle}
      />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200">
        追加
      </button>
    </form>
  );
};

export default AddTask;
