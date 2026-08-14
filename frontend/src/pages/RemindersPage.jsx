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
    <div className="reminders-page-full">
      {error && (
        <div className="card error-card error-banner">
          <p className="bad">Error: {error}</p>
        </div>
      )}

      <div className="reminders-hero">
        {loading ? (
          <div className="reminders-loading">
            <div className="spinner"></div>
            <p className="muted">Loading calendar...</p>
          </div>
        ) : (
          <>
            <h1 className="reminders-title">Calendar Reminders</h1>
            <div className="calendar-card">
              <Calendar onDateSelect={handleDateSelect} selectedDate={selectedDate} />
            </div>
          </>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content detail-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header detail-modal-header">
              <div className="modal-date-display">
                <div className="modal-date-day">{selectedDate.getDate()}</div>
                <div className="modal-date-info">
                  <div className="modal-date-weekday">
                    {selectedDate.toLocaleDateString('default', { weekday: 'long' })}
                  </div>
                  <div className="modal-date-month">
                    {selectedDate.toLocaleDateString('default', { month: 'short', year: 'numeric' })}
                  </div>
                </div>
              </div>
              <button className="modal-close-btn" onClick={closeModal}>
                <span>✕</span>
              </button>
            </div>

            <div className="modal-body">
              {dateReminders.length > 0 ? (
                <>
                  <div className="reminders-count">
                    {dateReminders.length} reminder{dateReminders.length !== 1 ? 's' : ''}
                  </div>
                  <ul className="detail-reminders-list">
                    {dateReminders.map((todo) => (
                      <li key={todo.id} className={`detail-reminder-item ${todo.completed ? 'completed' : ''}`}>
                        <div className="reminder-status-indicator">
                          <div className={`status-dot ${todo.completed ? 'done' : 'pending'}`}></div>
                        </div>
                        <div className="reminder-details">
                          <h3 className="detail-reminder-title">{todo.title}</h3>
                          {todo.description && (
                            <p className="detail-reminder-description">{todo.description}</p>
                          )}
                          <div className="reminder-meta">
                            <span className="reminder-time">
                              {new Date(todo.created_at).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </span>
                            {todo.completed && <span className="reminder-badge">Completed</span>}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="modal-empty-state">
                  <div className="empty-icon">📭</div>
                  <p>No reminders for this date</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
