import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth"; // Import useAuth
import { loginUser } from "../../api/api";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
    type: "",
  });

  interface JwtPayload {
    unique_name: string;
  }

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await loginUser(user); // Call the API function
      const data = await response.data; // Parse the response data
      const token = data.token; // Extract the token from the response
      const decoded = jwtDecode<JwtPayload>(token); // Decode the token

      if (token !== null) {
        // Store token & user username
        login(decoded.unique_name, user.username, user.type, data.token);

        setUser({
          username: "",
          password: "",
          type: "",
        }); // Reset the form fields

        navigate("/dashboard"); // Redirect to the dashboard
      } else {
        // Show error message
        console.error("Login failed:", data.message);
        alert("Invalid username or password. Please try again.");
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
            <label htmlFor="username" className="form-label">
              User Name
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
          <div className="col-auto">
            <label htmlFor="type" className="col-form-label">
              User Type
            </label>
            <div className="col-auto">
              <select
                className="form-select form-control"
                id="type"
                name="type"
                value={user.type}
                onChange={handleInput}
                required
              >
                <option value="" disabled>
                  Select your user type
                </option>
                <option value="employee">Employee</option>
                <option value="client">Client</option>
              </select>
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
