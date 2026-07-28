import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <header>
        <h1>OctoFit Tracker</h1>
        <p>Monitor users, teams, activities, workouts, and leaderboard performance.</p>
        <nav>
          <NavLink to="/">Users</NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
          <NavLink to="/workouts">Workouts</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>

      <footer>
        <p>
          Configure <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> to target your Codespace API URL.
        </p>
      </footer>
    </div>
  );
}

export default App;
