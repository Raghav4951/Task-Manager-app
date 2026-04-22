import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <div className="navbar-inner">
            <div className="brand">Task Manager</div>
            <div className="nav-links">
              <Link className="nav-link" to="/register">Register</Link>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
              <Link className="nav-link" to="/tasks">Tasks</Link>
            </div>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;