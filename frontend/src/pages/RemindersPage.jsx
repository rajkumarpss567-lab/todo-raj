import { useState, useEffect } from 'react';
import Calendar from '../components/Calendar';
import { getTodos } from '../api';

export default function RemindersPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

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

  const getTodosWithReminders = () => {
    return todos.filter((todo) => todo.created_at);
  };

  const dateReminders = selectedDate ? getRemindersForDate(selectedDate) : [];
  const hasRemindersOnDate = dateReminders.length > 0;

  return (
    <div className="page reminders-page">
      <header>
        <h1>Reminders</h1>
        <p className="lede">View your reminders by date.</p>
      </header>

      {error && (
        <div className="card error-card">
          <p className="bad">Error: {error}</p>
        </div>
      )}

      <div className="reminders-container">
        <div className="calendar-section">
          <div className="card">
            {loading ? (
              <div className="muted">Loading calendar...</div>
            ) : (
              <Calendar onDateSelect={setSelectedDate} selectedDate={selectedDate} />
            )}
          </div>
        </div>

        <div className="reminders-section">
          <div className="card">
            {selectedDate ? (
              <>
                <h2>
                  {selectedDate.toLocaleDateString('default', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </h2>
                {hasRemindersOnDate ? (
                  <ul className="reminders-list">
                    {dateReminders.map((todo) => (
                      <li key={todo.id} className={`reminder-item ${todo.completed ? 'completed' : ''}`}>
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          disabled
                          className="reminder-checkbox"
                        />
                        <div className="reminder-content">
                          <p className="reminder-title">{todo.title}</p>
                          {todo.description && <p className="reminder-description">{todo.description}</p>}
                          <p className="reminder-date">
                            {new Date(todo.created_at).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="muted">No reminders for this date</p>
                )}
              </>
            ) : (
              <p className="muted">Select a date to view reminders</p>
            )}
          </div>

          <div className="card upcoming-section">
            <h2>Upcoming Reminders</h2>
            {loading ? (
              <p className="muted">Loading...</p>
            ) : getTodosWithReminders().length === 0 ? (
              <p className="muted">No reminders scheduled</p>
            ) : (
              <ul className="reminders-list">
                {getTodosWithReminders()
                  .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                  .slice(0, 5)
                  .map((todo) => (
                    <li key={todo.id} className={`reminder-item ${todo.completed ? 'completed' : ''}`}>
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        disabled
                        className="reminder-checkbox"
                      />
                      <div className="reminder-content">
                        <p className="reminder-title">{todo.title}</p>
                        <p className="reminder-date">
                          {new Date(todo.created_at).toLocaleDateString('default', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
