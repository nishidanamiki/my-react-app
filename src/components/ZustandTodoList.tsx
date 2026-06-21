import { useEffect } from "react";
import { useTodoStore } from "../store/todoStore";

function ZustandTodoList() {
  const todos = useTodoStore((state) => state.todos);
  const fetchTodos = useTodoStore((state) => state.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      <h2>Zustand Todo一覧</h2>

      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}

export default ZustandTodoList;
