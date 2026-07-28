import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api.js';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTeams() {
      try {
        const response = await fetch(`${getApiUrl('teams')}`);
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.teams ?? [];
        setTeams(items);
      } catch (err) {
        setError(err.message || 'Unable to load teams');
      }
    }

    loadTeams();
  }, []);

  return (
    <section>
      <h2>Teams</h2>
      {error ? <p role="alert">{error}</p> : null}
      <ul>
        {teams.map((team) => (
          <li key={team._id || team.id || team.name}>
            <strong>{team.name}</strong> — {team.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Teams;
