import { useEffect, useState } from 'react';
import { getHealth } from './api';

export default function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHealth().then(setHealth).catch((err) => setError(err.message));
  }, []);

  return (
    <main className="page">
      <header>
        <h1>Todo App</h1>
        <p className="lede">Create a Todo App.</p>
      </header>

      <section className="card">
        <h2>Backend</h2>
        {health && <p className="ok">Connected — {health.service}</p>}
        {error && <p className="bad">Cannot reach the API: {error}</p>}
        {!health && !error && <p className="muted">Checking...</p>}
      </section>
    </main>
  );
}
