import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth"; // Import useAuth

export default function Login() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        login(data.id, data.email, data.firstName, data.role, data.token);
        setUser({
          email: "",
          password: "",
        }); // Store token & user email
        alert("Login successful!");
        navigate("/dashboard"); // Redirect to the dashboard
      } else {
        // Show error message
        console.error("Login failed:", data.message);
        alert("Invalid email or password. Please try again.");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="row g-3 align-items-center container login-container">
        <h1 className="main-heading mb-3 text-center">Login Form</h1>
        <form onSubmit={handleSubmit} className="col-form-label">
          <div className="col-auto">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
              required
              className="form-control"
            />
          </div>
          <div className="col-auto">
            <label htmlFor="password" className="col-form-label">
              Password
            </label>
            <div className="col-auto">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
                required
                className="form-control"
              />
            </div>
          </div>
          <br />
          <button type="submit" className="btn btn-submit">
            Login Now
          </button>
        </form>
      </div>
    </>
  );
}
