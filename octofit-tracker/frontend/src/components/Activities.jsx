import { useEffect, useState } from 'react';
import { fetchApi } from '../utils/api.js';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadActivities() {
      try {
        const response = await fetchApi('activities');
        const data = await response.json();
        const list = Array.isArray(data) ? data : data.activities ?? data.results ?? [];
        setActivities(list);
      } catch (err) {
        setError(err.message || 'Unable to load activities');
      } finally {
        setLoading(false);
      }
    }

    loadActivities();
  }, []);

  return (
    <section>
      <h2>Activities</h2>
      {loading && <p>Loading activities...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && (
        <ul>
          {activities.map((activity) => (
            <li key={activity._id || activity.id || `${activity.description}-${activity.date}`}>
              {activity.description} — {activity.durationMinutes} min ({activity.caloriesBurned} kcal)
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
