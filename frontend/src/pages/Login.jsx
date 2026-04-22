import { useState } from "react";
import API from "../services/api";

function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/auth/login", form);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setMessage("Login successful");
        } catch (error) {
            setMessage(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="card form-card">
            <h1 className="page-title">Login</h1>

            <form onSubmit={handleSubmit}>
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
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>

                <button className="btn btn-primary" type="submit">
                    Login
                </button>
            </form>

            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default Login;