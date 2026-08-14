import { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../api';
import TodoList from '../components/TodoList';

export default function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTodos();
      const todosList = Array.isArray(data) ? data : data.results || [];
      setTodos(todosList);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (formData) => {
    try {
      const newTodo = await createTodo(formData);
      setTodos([...todos, newTodo]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      const updatedTodo = await updateTodo(id, data);
      setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="todos-page">
      <TodoList
        todos={todos}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        loading={loading}
        error={error}
      />
    </div>
  );
}
