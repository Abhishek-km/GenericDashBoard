import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useAuth } from '../../contexts/Auth'; // Import useAuth

export default function Register() {
  const [user, setUser] = React.useState({
    username: '',
    email: '',
    phone: '',
    password: '',
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
      const response = await fetch('https://example.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        if (storetoken) {
          storetoken(data.token); // Store the token in local storage
        }
        navigate('/dashboard'); // Redirect to the dashboard
        console.log('Registration successful:', data);
      } else {
        // Show error message
        console.error('Registration failed:', data.message);
        alert('Registration failed. Please try again.');
        navigate("/dashboard");
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again later.');
      navigate("/dashboard");
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration" style={{ backgroundColor: '#007bff' }}>
            <div className="container grid grid-two-cols">
              {/* Registration Form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3 text-center">Registration Form</h1>
                <form onSubmit={handleSubmit} className="registration-form-inner">
                  <div className="form-group">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter your name"
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                      required
                      className="form-input"
                    />
                  </div>
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
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      placeholder="Enter your Phone Number"
                      autoComplete="off"
                      value={user.phone}
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
                  <button type="submit" className="btn btn-submit">Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
