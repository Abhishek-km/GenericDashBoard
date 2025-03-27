import React from "react";

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
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="https://cdn.dribbble.com/users/1946759/screenshots/4596801/admin.png"
                  alt="registration"
                className="img-fill"
                />
              </div>
              {/* <!-- Registration Form --> */}
              <div className="registration-form">
                <h1 className="main-heading mb3">Login Form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      id="password"
                      name="password"
                      placeholder="Enter your Password"
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
