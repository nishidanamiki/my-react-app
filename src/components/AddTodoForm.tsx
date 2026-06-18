import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// 新しいTODOを作成する非同期関数
const createTodo = async (newTodo: { title: string }): Promise<Todo> => {
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    newTodo,
  );
  return data;
};

function AddTodoForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleAddTodo = () => {
    mutation.mutate({ title: "new Todo" });
  };

  return (
    <div>
      <button onClick={handleAddTodo} disabled={mutation.isPending}>
        {mutation.isPending ? "Adding..." : "Add Todo"}
      </button>
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
    </div>
  );
}

export default AddTodoForm;
