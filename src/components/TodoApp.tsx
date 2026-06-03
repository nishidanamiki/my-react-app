import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

type Todo = { id: number; text: string };

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Reactを学ぶ" },
    { id: 2, text: "寝る" },
  ]);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>TODOリスト</h2>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default TodoApp;
