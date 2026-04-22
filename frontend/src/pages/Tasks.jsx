import { useEffect, useState } from "react";
import API from "../services/api";

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [form, setForm] = useState({
        title: "",
        description: "",
        status: "pending",
        priority: "medium",
    });
    const [message, setMessage] = useState("");

    const fetchTasks = async () => {
        try {
            const res = await API.get("/tasks");
            setTasks(res.data.tasks);
        } catch (error) {
            setMessage(error.response?.data?.message || "Failed to fetch tasks");
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            await API.post("/tasks", form);
            setMessage("Task created successfully");
            setForm({
                title: "",
                description: "",
                status: "pending",
                priority: "medium",
            });
            fetchTasks();
        } catch (error) {
            setMessage(error.response?.data?.message || "Failed to create task");
        }
    };

    const handleDelete = async (id) => {
        try {
            await API.delete(`/tasks/${id}`);
            setMessage("Task deleted successfully");
            fetchTasks();
        } catch (error) {
            setMessage(error.response?.data?.message || "Failed to delete task");
        }
    };

    return (
        <div>
            <h1 className="page-title">My Tasks</h1>

            <div className="card">
                <h2 className="section-title">Create Task</h2>

                <form onSubmit={handleCreate}>
                    <div className="form-group">
                        <label className="label">Title</label>
                        <input
                            className="input"
                            name="title"
                            placeholder="Task title"
                            value={form.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="label">Description</label>
                        <input
                            className="input"
                            name="description"
                            placeholder="Task description"
                            value={form.description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-2">
                        <div className="form-group">
                            <label className="label">Status</label>
                            <select
                                className="select"
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                            >
                                <option value="pending">Pending</option>
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="label">Priority</label>
                            <select
                                className="select"
                                name="priority"
                                value={form.priority}
                                onChange={handleChange}
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>

                    <button className="btn btn-primary" type="submit">
                        Create Task
                    </button>
                </form>

                {message && <p className="message">{message}</p>}
            </div>

            <div className="card">
                <h2 className="section-title">Task List</h2>

                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div className="task-item" key={task._id}>
                            <div className="task-title">{task.title}</div>
                            <div className="task-meta">{task.description}</div>
                            <div className="task-meta">
                                <span className="badge badge-status">{task.status}</span>
                                <span className="badge badge-priority">{task.priority}</span>
                            </div>
                            <div className="actions">
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(task._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="empty-text">No tasks available</p>
                )}
            </div>
        </div>
    );
}

export default Tasks;