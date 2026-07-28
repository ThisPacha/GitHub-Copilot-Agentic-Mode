import { Link, Route, Routes } from "react-router-dom";
import Activities from "./components/Activities.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Teams from "./components/Teams.jsx";
import Users from "./components/Users.jsx";
import Workouts from "./components/Workouts.jsx";

function App() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1>OctoFit Tracker</h1>
      <p>Modern multi-tier fitness tracker powered by React, Express, and MongoDB.</p>
      <nav style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/workouts">Workouts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <section>
      <h2>Overview</h2>
      <p>
        Define VITE_CODESPACE_NAME in .env.local to use the Codespaces API URL automatically.
        If it is not set, the app will fall back to localhost.
      </p>
    </section>
  );
}

export default App;
