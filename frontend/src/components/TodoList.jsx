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

  const completedCount = todos.filter(t => t.completed).length;
  const completionPercentage = todos.length > 0 ? Math.round((completedCount / todos.length) * 100) : 0;

  return (
    <section className="todo-page-container">
      <div className="todo-page-header">
        <div>
          <h1 className="todo-page-title">Your Todos</h1>
          <p className="todo-page-subtitle">Stay organized and productive</p>
        </div>
        {todos.length > 0 && (
          <div className="progress-widget">
            <div className="progress-stat">
              <span className="progress-number">{completedCount}</span>
              <span className="progress-label">Done</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${completionPercentage}%` }}></div>
            </div>
            <span className="progress-percentage">{completionPercentage}%</span>
          </div>
        )}
      </div>

      {error && <div className="todo-error-banner">Error: {error}</div>}
      
      <div className="todo-input-section">
        <TodoForm onSubmit={onAdd} />
      </div>

      {loading ? (
        <div className="todo-loading-state">
          <div className="spinner"></div>
          <p>Loading your todos...</p>
        </div>
      ) : todos.length === 0 ? (
        <div className="todo-empty-state">
          <div className="empty-todo-icon">📝</div>
          <h3>No todos yet</h3>
          <p>Create your first todo above to get started!</p>
        </div>
      ) : (
        <div className="todo-list">
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
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
