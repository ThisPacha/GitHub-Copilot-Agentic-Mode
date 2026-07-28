import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import heroImg from '../../../docs/octofitapp-small.png'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">OctoFit Tracker</p>
          <h1>Train smarter with your team</h1>
          <p>Monitor activity, compare performance, and keep your crew moving.</p>
        </div>
        <img src={heroImg} alt="OctoFit tracker logo" width="110" height="110" />
      </header>

      <nav className="nav" aria-label="Primary">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        <NavLink to="/workouts">Workouts</NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="grid">
              <section className="card">
                <Users />
              </section>
              <section className="card">
                <Teams />
              </section>
              <section className="card">
                <Activities />
              </section>
              <section className="card">
                <Leaderboard />
              </section>
              <section className="card">
                <Workouts />
              </section>
            </div>
          }
        />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  )
}

export default App
