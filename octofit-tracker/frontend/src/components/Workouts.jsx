import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api.js';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const response = await fetch(`${getApiUrl('workouts')}`);
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.workouts ?? [];
        setWorkouts(items);
      } catch (err) {
        setError(err.message || 'Unable to load workouts');
      }
    }

    loadWorkouts();
  }, []);

  return (
    <section>
      <h2>Workouts</h2>
      {error ? <p role="alert">{error}</p> : null}
      <ul>
        {workouts.map((workout) => (
          <li key={workout._id || workout.id || workout.title}>
            <strong>{workout.title}</strong> — {workout.difficulty} ({workout.durationMinutes} min)
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Workouts;
