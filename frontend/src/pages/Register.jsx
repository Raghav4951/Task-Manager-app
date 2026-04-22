import { useState } from "react";
import API from "../services/api";

function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/auth/register", form);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setMessage("Registration successful");
        } catch (error) {
            setMessage(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="card form-card">
            <h1 className="page-title">Create Account</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="label">Name</label>
                    <input
                        className="input"
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label className="label">Email</label>
                    <input
                        className="input"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label className="label">Password</label>
                    <input
                        className="input"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label className="label">Role</label>
                    <select
                        className="select"
                        name="role"
                        onChange={handleChange}
                        value={form.role}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <button className="btn btn-primary" type="submit">
                    Register
                </button>
            </form>

            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default Register;