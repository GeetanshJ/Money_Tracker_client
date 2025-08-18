import { useState } from "react";
import "./Login.css";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../App.js";
import { toast, ToastContainer } from "react-toastify"

const Login = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);

    const [formData, setFormData] = useState({
        signup_name: "",
        signup_email: "",
        signup_password: "",
        login_email: "",
        login_password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const authSubmit = async () => {
        const endpoint = isLogin ? "/auth/login_submit" : "/auth/signup_submit";
        const payload = isLogin
            ? {
                login_email: formData.login_email,
                login_password: formData.login_password,
            }
            : {
                signup_name: formData.signup_name,
                signup_email: formData.signup_email,
                signup_password: formData.signup_password,
            };

        try {
            const res = await axios.post(`${API_URL}${endpoint}`, payload, { withCredentials: true });
            toast.success(res.data.message, { autoClose: 3000, closeButton: false })
            if (res.data.message === "User Logged") {
                navigate("/home");
            }
        } catch (error) {
            toast.error(error.response.data.message, { autoClose: 3000, closeButton: false })
        }
    };

    return (
        <div>
            <Navbar />
            <ToastContainer position="top-right" autoClose={5000}/>
            <div className="auth-page">
                <div className={`form-panel ${isLogin ? "right" : "left"}`}>
                    {!isLogin ? (
                        <div className="form-content">
                            <h2>Create Account</h2>
                            <input
                                name="signup_name"
                                type="text"
                                value={formData.signup_name}
                                onChange={handleChange}
                                placeholder="Full Name"
                            />
                            <input
                                name="signup_email"
                                type="email"
                                value={formData.signup_email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                            <input
                                name="signup_password"
                                type="password"
                                value={formData.signup_password}
                                onChange={handleChange}
                                placeholder="Password"
                            />
                            <button onClick={authSubmit}>Sign Up</button>
                            <p>
                                Already have an account?{" "}
                                <span onClick={() => setIsLogin(true)}>I want to login</span>
                            </p>
                        </div>
                    ) : (
                        <div className="form-content">
                            <h2>Welcome Back</h2>
                            <input
                                name="login_email"
                                type="email"
                                value={formData.login_email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                            <input
                                name="login_password"
                                type="password"
                                value={formData.login_password}
                                onChange={handleChange}
                                placeholder="Password"
                            />
                            <button onClick={authSubmit}>Login</button>
                            <p>
                                Don't have an account?{" "}
                                <span onClick={() => setIsLogin(false)}>I want to sign up</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
