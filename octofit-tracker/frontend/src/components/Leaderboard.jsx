import { useEffect, useState } from "react";
import { getApiBaseUrl } from "../utils/api.js";

function Leaderboard() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/leaderboard/`);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const payload = await response.json();
        const data = Array.isArray(payload) ? payload : payload.leaderboard ?? [];
        setRows(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, []);

  if (loading) return <p>Loading leaderboard...</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <section>
      <h2>Leaderboard</h2>
      <ul>
        {rows.map((entry) => (
          <li key={entry._id ?? `${entry.rank}-${entry.user}`}>
            #{entry.rank} — {entry.user?.name ?? entry.user ?? "Unknown"}: {entry.totalPoints} pts
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Leaderboard;
