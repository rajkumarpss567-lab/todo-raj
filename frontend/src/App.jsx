import { useEffect, useState } from 'react';
import { getHealth, getTodos, createTodo, updateTodo, deleteTodo } from './api';
import TodoList from './components/TodoList';

export default function App() {
  const [health, setHealth] = useState(null);
  const [healthError, setHealthError] = useState(null);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHealth().then(setHealth).catch((err) => setHealthError(err.message));
  }, []);

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
    <main className="page">
      <header>
        <h1>Todo App</h1>
        <p className="lede">Organize your tasks efficiently.</p>
      </header>

      <section className="card">
        <h2>Backend</h2>
        {health && <p className="ok">Connected — {health.service}</p>}
        {healthError && <p className="bad">Cannot reach the API: {healthError}</p>}
        {!health && !healthError && <p className="muted">Checking...</p>}
      </section>

      <TodoList
        todos={todos}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        loading={loading}
        error={error}
      />
    </main>
  );
}
