import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// データをフェッチする非同期関数
const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos",
  );
  return data;
};

function QueryTodoList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default QueryTodoList;
