import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api.js';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTeams() {
      try {
        const endpoint = '/api/teams/';
        const response = await fetch(`${getApiUrl('teams')}`);
        const data = await response.json();
        const list = Array.isArray(data) ? data : data.teams ?? data.results ?? [];
        setTeams(list);
      } catch (err) {
        setError(err.message || 'Unable to load teams');
      } finally {
        setLoading(false);
      }
    }

    loadTeams();
  }, []);

  return (
    <section>
      <h2>Teams</h2>
      {loading && <p>Loading teams...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && (
        <ul>
          {teams.map((team) => (
            <li key={team._id || team.id || team.name}>
              {team.name} — {team.description}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
