import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth"; // Import useAuth

export default function Login() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const { storetoken } = useAuth() || {}; // Destructure storetoken from useAuth
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("https://example.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        if (storetoken) {
          storetoken(data.token); // Store the token in local storage
        }
        navigate("/dashboard"); // Redirect to the dashboard
        console.log("Login successful:", data);
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
      <section>
        <main>
          <div className="section-registration" style={{ backgroundColor: "#007bff" }}>
            <div className="container">
              {/* Login Form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3 text-center">Login Form</h1>
                <form onSubmit={handleSubmit} className="login-form">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                      required
                      className="form-input"
                    />
                  </div>
                  <button type="submit" className="btn btn-submit">Login Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
