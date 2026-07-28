import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api.js';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadActivities() {
      try {
        const response = await fetch(`${getApiUrl('activities')}`);
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.activities ?? [];
        setActivities(items);
      } catch (err) {
        setError(err.message || 'Unable to load activities');
      }
    }

    loadActivities();
  }, []);

  return (
    <section>
      <h2>Activities</h2>
      {error ? <p role="alert">{error}</p> : null}
      <ul>
        {activities.map((activity) => (
          <li key={activity._id || activity.id || activity.description}>
            <strong>{activity.description}</strong> — {activity.durationMinutes} min
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Activities;
