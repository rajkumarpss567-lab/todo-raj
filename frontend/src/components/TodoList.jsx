import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

export default function TodoList({
  todos,
  onAdd,
  onUpdate,
  onDelete,
  loading,
  error,
}) {
  const [editingId, setEditingId] = useState(null);

  const handleEditStart = (id) => {
    setEditingId(id);
  };

  const handleEditSave = async (id, data) => {
    await onUpdate(id, data);
    setEditingId(null);
  };

  const handleEditCancel = () => {
    setEditingId(null);
  };

  const handleToggle = (id, todo) => {
    handleEditSave(id, { completed: !todo.completed });
  };

  return (
    <section className="card">
      <h2>Your Todos</h2>
      {error && <p className="bad">Error: {error}</p>}
      
      <TodoForm onSubmit={onAdd} />

      {loading ? (
        <p className="muted">Loading todos...</p>
      ) : todos.length === 0 ? (
        <p className="muted">No todos yet. Create one above!</p>
      ) : (
        <div className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isEditing={editingId === todo.id}
              onToggle={() => handleToggle(todo.id, todo)}
              onEdit={(data) => handleEditSave(todo.id, data)}
              onCancelEdit={handleEditCancel}
              onStartEdit={() => handleEditStart(todo.id)}
              onDelete={() => onDelete(todo.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
