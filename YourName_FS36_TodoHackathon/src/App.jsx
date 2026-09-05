import { Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Completed from './pages/Completed'
import Stats from './pages/Stats'
import TaskDetail from './pages/TaskDetail'

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div><strong>Smart Task Manager</strong><span>FS36 Mini Hackathon</span></div>
        <nav>
          <NavLink to="/" end>All Tasks</NavLink>
          <NavLink to="/completed">Completed</NavLink>
          <NavLink to="/stats">Stats</NavLink>
        </nav>
      </header>
      <main className="page-wrap">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/task/:id" element={<TaskDetail />} />
        </Routes>
      </main>
    </div>
  )
}
