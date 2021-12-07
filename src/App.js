import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const addTodo = () => {
    if (text.trim().length)
      // condition text not null
      setTodos([
        ...todos, // retriev existing todo list
        {
          id: new Date().toISOString(),
          text,
          complited: false,
        },
      ]);
  };
  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          complited: !todo.complited,
        };
      })
    );
  };
  return (
    <div className="App">
      <InputField text={text} setText={setText} addTodo ={addTodo}/>
      <TodoList
        todos={todos}
        toggleTodoComplete={toggleTodoComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
