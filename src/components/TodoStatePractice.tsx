import { useState } from "react";

type Todo = {
  id: number;
  text: string;
};

function TodoStatePractice() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Reactを学ぶ" },
    { id: 2, text: "寝る" },
  ]);

  const addTodo = (newTodoText: string) => {
    const newTodo = { id: Date.now(), text: newTodoText };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (idToDelete: number) => {
    setTodos(todos.filter((todo) => todo.id !== idToDelete));
  };

  const updateTodo = (idToUpdate: number, newText: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === idToUpdate) {
          return { ...todo, text: newText };
        } else {
          return todo;
        }
      }),
    );
  };
  return (
    <div>
      <h2>Todoリスト</h2>

      <button onClick={() => addTodo("復習する")}>Todoを追加</button>
      <button onClick={() => deleteTodo(2)}>「寝る」を削除</button>
      <button onClick={() => updateTodo(1, "Reactを復習する")}>
        1つ目を更新
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoStatePractice;
