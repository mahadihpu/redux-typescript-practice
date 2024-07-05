import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";
import TodoProvider from "./context/TodoProvider";

export default function App() {
  return (
    <div>
      <TodoProvider>
        <TodoList />
        <TodoForm />
      </TodoProvider>
    </div>
  );
}
