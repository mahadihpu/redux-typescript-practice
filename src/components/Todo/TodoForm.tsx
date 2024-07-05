import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

export default function TodoForm() {
  const { state, dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");
  console.log(state);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
        id: (Math.random() + 1).toString(36).substring(7),
        title: task,
        isCompleted: false,
      };

      dispatch({type: "addTodo", payload: todo })
  };

  console.log({state})

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Todo">Task</label>
        <br />
        <input
          type="text"
          name="todo"
          id="todo"
          onBlur={(e) => setTask(e.target.value)}
          className="border border-purple-400"
        />
        <br /> <br />
        <button type="submit" className="px-2 py-1 bg-purple-600">
          Submit
        </button>
      </form>
    </div>
  );
}
