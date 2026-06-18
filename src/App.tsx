import QueryTodoList from "./components/QueryTodoList";
import AddTodoForm from "./components/AddTodoForm";
import "./App.css";

function App() {
  return (
    <>
      <h1>TanStack QueryのTodo一覧</h1>

      <AddTodoForm />
      <QueryTodoList />
    </>
  );
}

export default App;
