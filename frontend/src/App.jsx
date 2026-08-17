import { useEffect, useState } from 'react';
import { getHealth } from './api';
import TodosPage from './pages/TodosPage';
import RemindersPage from './pages/RemindersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FeaturesPage from './pages/FeaturesPage';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  const [health, setHealth] = useState(null);
  const [healthError, setHealthError] = useState(null);
  const [currentPage, setCurrentPage] = useState('todos');

  useEffect(() => {
    getHealth().then(setHealth).catch((err) => setHealthError(err.message));
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <h1 className="navbar-title">Task Manager</h1>
          </div>
          <ul className="navbar-nav">
            <li>
              <button
                className={`nav-link ${currentPage === 'todos' ? 'active' : ''}`}
                onClick={() => setCurrentPage('todos')}
              >
                Todos
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${currentPage === 'reminders' ? 'active' : ''}`}
                onClick={() => setCurrentPage('reminders')}
              >
                Reminders
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${currentPage === 'features' ? 'active' : ''}`}
                onClick={() => setCurrentPage('features')}
              >
                Features
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
                onClick={() => setCurrentPage('services')}
              >
                Services
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                onClick={() => setCurrentPage('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                onClick={() => setCurrentPage('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="health-indicator">
          {health && <span className="health-ok" title="Connected">●</span>}
          {healthError && <span className="health-bad" title={`Error: ${healthError}`}>●</span>}
          {!health && !healthError && <span className="health-checking" title="Checking...">●</span>}
        </div>
      </nav>

      {currentPage === 'todos' && <TodosPage />}
      {currentPage === 'reminders' && <RemindersPage />}
      {currentPage === 'features' && <FeaturesPage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
    </>
  );
}
