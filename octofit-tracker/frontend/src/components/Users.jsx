import { useEffect, useState } from 'react';
import { fetchApi } from '../utils/api.js';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetchApi('users');
        const data = await response.json();
        const list = Array.isArray(data) ? data : data.users ?? data.results ?? [];
        setUsers(list);
      } catch (err) {
        setError(err.message || 'Unable to load users');
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  return (
    <section>
      <h2>Users</h2>
      {loading && <p>Loading users...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user._id || user.id || user.email}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
