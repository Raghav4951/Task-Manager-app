import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const meRes = await API.get("/auth/me");
                const loggedInUser = meRes.data.user;
                setUser(loggedInUser);

                if (loggedInUser.role === "admin") {
                    const usersRes = await API.get("/admin/users");
                    const tasksRes = await API.get("/admin/tasks");
                    setUsers(usersRes.data.users || []);
                    setTasks(tasksRes.data.tasks || []);
                }
            } catch (error) {
                setMessage(error.response?.data?.message || "Failed to load dashboard");
            }
        };

        fetchDashboardData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setUsers([]);
        setTasks([]);
        setMessage("Logged out");
    };

    return (
        <div>
            <h1 className="page-title">Dashboard</h1>

            {user ? (
                <>
                    <div className="grid grid-3">
                        <div className="stat-card">
                            <div className="stat-title">Name</div>
                            <div className="stat-value">{user.name}</div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-title">Email</div>
                            <div className="stat-value" style={{ fontSize: "18px" }}>{user.email}</div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-title">Role</div>
                            <div className="stat-value">{user.role}</div>
                        </div>
                    </div>

                    <div className="actions" style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <button className="btn btn-dark" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>

                    {user.role === "admin" && (
                        <div className="grid grid-2">
                            <div className="card">
                                <h2 className="section-title">All Users</h2>
                                {users.length > 0 ? (
                                    users.map((u) => (
                                        <div className="list-item" key={u._id}>
                                            <strong>{u.name}</strong><br />
                                            {u.email} — {u.role}
                                        </div>
                                    ))
                                ) : (
                                    <p className="empty-text">No users found</p>
                                )}
                            </div>

                            <div className="card">
                                <h2 className="section-title">All Tasks</h2>
                                {tasks.length > 0 ? (
                                    tasks.map((task) => (
                                        <div className="list-item" key={task._id}>
                                            <strong>{task.title}</strong><br />
                                            {task.status} — {task.priority}<br />
                                            {task.user?.name} ({task.user?.email})
                                        </div>
                                    ))
                                ) : (
                                    <p className="empty-text">No tasks found</p>
                                )}
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <p className="message">{message || "No user data"}</p>
            )}
        </div>
    );
}

export default Dashboard;