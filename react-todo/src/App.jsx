
import React, { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    // Initial todos here
  ]);

  const addTodo = (newTodoText) => {
    const newTodo = { id: Date.now(), text: newTodoText, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodoCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleTodoCompletion={toggleTodoCompletion}
        onDeleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;