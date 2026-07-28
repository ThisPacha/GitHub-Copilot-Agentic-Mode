import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api.js';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(`${getApiUrl('users')}`);
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.users ?? [];
        setUsers(items);
      } catch (err) {
        setError(err.message || 'Unable to load users');
      }
    }

    loadUsers();
  }, []);

  return (
    <section>
      <h2>Users</h2>
      {error ? <p role="alert">{error}</p> : null}
      <ul>
        {users.map((user) => (
          <li key={user._id || user.id || `${user.name}-${user.email}`}>
            <strong>{user.name}</strong> — {user.email} ({user.role})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Users;
