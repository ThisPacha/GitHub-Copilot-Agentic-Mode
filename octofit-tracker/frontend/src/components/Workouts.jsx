import { useEffect, useState } from 'react';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const response = await fetch('/api/workouts/');
        const data = await response.json();
        const list = Array.isArray(data) ? data : data.workouts ?? data.results ?? [];
        setWorkouts(list);
      } catch (err) {
        setError(err.message || 'Unable to load workouts');
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  return (
    <section>
      <h2>Workouts</h2>
      {loading && <p>Loading workouts...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && (
        <ul>
          {workouts.map((workout) => (
            <li key={workout._id || workout.id || workout.name}>
              {workout.name} — {workout.focus} ({workout.durationMinutes} min)
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
