import { useState } from 'react';

export default function TodoItem({
  todo,
  index,
  isEditing,
  onToggle,
  onEdit,
  onCancelEdit,
  onStartEdit,
  onDelete,
}) {
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleSave = async () => {
    if (!editTitle.trim()) {
      setEditTitle(todo.title);
      return;
    }

    setSaving(true);
    try {
      await onEdit({
        title: editTitle.trim(),
        description: editDescription.trim(),
      });
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    onCancelEdit();
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      setDeleting(true);
      try {
        await onDelete();
      } finally {
        setDeleting(false);
      }
    }
  };

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <form
          className="todo-edit-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            disabled={saving}
            autoFocus
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            disabled={saving}
          />
          <div className="todo-edit-buttons">
            <button
              type="submit"
              className="save-btn"
              disabled={saving || !editTitle.trim()}
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancel}
              disabled={saving}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      style={{ '--delay': `${index * 0.05}s` }}
    >
      <div className="todo-checkbox-wrapper">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={onToggle}
        />
      </div>
      <div className="todo-content">
        <h3 className="todo-title">{todo.title}</h3>
        {todo.description && <p className="todo-description">{todo.description}</p>}
        {todo.attachments && todo.attachments.length > 0 && (
          <div className="todo-attachments">
            {todo.attachments.map((attachment, idx) => (
              <div key={idx} className="todo-attachment">
                <img src={attachment.data} alt={attachment.name || `Attachment ${idx + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="todo-actions">
        <button
          className="edit-btn"
          onClick={onStartEdit}
          disabled={deleting}
          title="Edit todo"
        >
          ✎
        </button>
        <button
          className="delete-btn"
          onClick={handleDelete}
          disabled={deleting}
          title="Delete todo"
        >
          🗑
        </button>
      </div>
    </div>
  );
}
