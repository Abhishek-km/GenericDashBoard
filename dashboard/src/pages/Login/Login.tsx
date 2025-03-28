import React from "react";
import "./Login.css";

export default function Login() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <>
 <section>
  <main>
    <div className="section-registration" style={{backgroundColor: "#007bff"}}>
      <div className="container">
        {/* Registration Form */}
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
