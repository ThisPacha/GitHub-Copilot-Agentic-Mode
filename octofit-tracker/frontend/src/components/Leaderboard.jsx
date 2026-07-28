import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api.js';

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const response = await fetch(`${getApiUrl('leaderboard')}`);
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.leaderboard ?? [];
        setEntries(items);
      } catch (err) {
        setError(err.message || 'Unable to load leaderboard');
      }
    }

    loadLeaderboard();
  }, []);

  return (
    <section>
      <h2>Leaderboard</h2>
      {error ? <p role="alert">{error}</p> : null}
      <ol>
        {entries.map((entry) => (
          <li key={entry._id || entry.id || entry.rank}>
            Rank {entry.rank}: {entry.user?.name || entry.name || 'Unknown'} — {entry.totalPoints} pts
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Leaderboard;
