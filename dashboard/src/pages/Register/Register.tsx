import React from 'react';

export default function Register() {
  const [user, setUser] = React.useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    setUser({
      username: '',
      email: '',
      phone: '',
      password: '',
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
                  src="https://static.vecteezy.com/system/resources/previews/003/689/228/large_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                  alt="registration"
                  width="1000"
                  height="1000"
                />
              </div>
              {/* <!-- Registration Form --> */}
              <div className="registration-form">
                <h1 className="main-heading mb3">Registration Form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="name"
                      name="username"
                      placeholder="Enter your name"
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                      required
                    />
                  </div>
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
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      placeholder="Enter your Phone Number"
                      autoComplete="off"
                      value={user.phone}
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
                    Register Now
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
