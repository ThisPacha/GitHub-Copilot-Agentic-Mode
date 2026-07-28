import { useEffect, useState } from 'react';

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const response = await fetch('/api/leaderboard/');
        const data = await response.json();
        const list = Array.isArray(data) ? data : data.leaderboard ?? data.results ?? [];
        setEntries(list);
      } catch (err) {
        setError(err.message || 'Unable to load leaderboard');
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, []);

  return (
    <section>
      <h2>Leaderboard</h2>
      {loading && <p>Loading leaderboard...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && (
        <ol>
          {entries.map((entry) => (
            <li key={entry._id || entry.id || entry.rank}>
              {entry.rank}. {entry.user?.name || entry.name || 'Unknown'} — {entry.totalPoints} pts
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
