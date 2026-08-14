import { useState } from 'react';

export default function TodoForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setSubmitting(true);
    try {
      await onSubmit({
        title: title.trim(),
        description: description.trim(),
        completed: false,
      });
      setTitle('');
      setDescription('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-form-group">
        <input
          type="text"
          className="todo-form-input todo-form-title-input"
          placeholder="✓ What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={submitting}
          autoFocus
        />
      </div>
      <div className="todo-form-group">
        <input
          type="text"
          className="todo-form-input todo-form-desc-input"
          placeholder="+ Add a description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={submitting}
        />
      </div>
      <button type="submit" className="todo-form-submit" disabled={submitting || !title.trim()}>
        <span className="submit-icon">+</span>
        {submitting ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
}
