import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useAuth } from "../../contexts/Auth"; // Import useAuth

export default function Register() {
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
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
    console.log(user);

    try {
      const response = await fetch("https://dummyjson.com/users/add", {
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
        navigate("/dashboard"); // Redirect to the dashboard
        console.log("Registration successful:", data);
      } else {
        // Show error message
        console.error("Registration failed:", data.message);
        alert("Registration failed. Please try again.");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again later.");
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="row g-3 align-items-center container register-container">
        <h1 className="main-heading mb-3 text-center">Login Form</h1>
        <form onSubmit={handleSubmit} className="col-form-label">
          <div className="col-auto">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your First Name"
              autoComplete="off"
              value={user.firstName}
              onChange={handleInput}
              required
              className="form-control"
            />
          </div>
          <div className="col-auto">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your Last Name"
              autoComplete="off"
              value={user.lastName}
              onChange={handleInput}
              required
              className="form-control"
            />
          </div>
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
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              autoComplete="off"
              value={user.username}
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
