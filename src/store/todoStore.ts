import { create } from "zustand";

interface Todo {
  id: number;
  title: string;
}

interface TodoState {
  todos: Todo[];
  fetchTodos: () => Promise<void>;
}

export const useTodoStore = create<TodoState>((set) => ({
  // Todo一覧の初期値
  todos: [],
  // APIからTodoを取得する
  fetchTodos: async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5",
    );
    const data = await response.json();
    // 取得したTodoをストアに保存
    set({ todos: data });
  },
}));
