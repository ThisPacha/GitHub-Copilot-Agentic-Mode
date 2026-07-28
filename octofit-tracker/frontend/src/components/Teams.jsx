import { useEffect, useState } from "react";
import { getApiBaseUrl } from "../utils/api.js";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadTeams() {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/teams/`);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const payload = await response.json();
        const data = Array.isArray(payload) ? payload : payload.teams ?? [];
        setTeams(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadTeams();
  }, []);

  if (loading) return <p>Loading teams...</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <section>
      <h2>Teams</h2>
      <ul>
        {teams.map((team) => (
          <li key={team._id ?? team.name}>
            <strong>{team.name}</strong> — {team.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Teams;
