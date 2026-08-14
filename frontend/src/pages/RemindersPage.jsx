import { useState, useEffect } from 'react';
import Calendar from '../components/Calendar';
import { getTodos } from '../api';

export default function RemindersPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const getRemindersForDate = (date) => {
    if (!date) return [];
    return todos.filter((todo) => {
      const createdDate = new Date(todo.created_at);
      return (
        createdDate.getDate() === date.getDate() &&
        createdDate.getMonth() === date.getMonth() &&
        createdDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const dateReminders = selectedDate ? getRemindersForDate(selectedDate) : [];

  return (
    <div className="page reminders-page">
      <header>
        <h1>Reminders</h1>
        <p className="lede">Click on a date to view reminders.</p>
      </header>

      {error && (
        <div className="card error-card">
          <p className="bad">Error: {error}</p>
        </div>
      )}

      <div className="reminders-centered-container">
        {loading ? (
          <div className="muted">Loading calendar...</div>
        ) : (
          <div className="card calendar-large">
            <Calendar onDateSelect={handleDateSelect} selectedDate={selectedDate} />
          </div>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                {selectedDate.toLocaleDateString('default', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </h2>
              <button className="modal-close-btn" onClick={closeModal}>×</button>
            </div>

            {dateReminders.length > 0 ? (
              <ul className="modal-reminders-list">
                {dateReminders.map((todo) => (
                  <li key={todo.id} className={`modal-reminder-item ${todo.completed ? 'completed' : ''}`}>
                    <h3 className="modal-reminder-title">{todo.title}</h3>
                    {todo.description && <p className="modal-reminder-description">{todo.description}</p>}
                    <p className="modal-reminder-date">
                      {new Date(todo.created_at).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="modal-empty-state">No reminders for this date</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
