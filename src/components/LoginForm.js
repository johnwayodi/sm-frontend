import React from 'react';

const LoginComponent = (
  { onChange, handleLogin, login },
) => (
  <div className="main-section login-section">
    <div className="form-section">
      <div className="form-header">Welcome, Log In</div>
      <div className="my-form">
        <form action="#" id="form1">
          <div className="container">
            <label htmlFor="username" className="my-form-extra">Username</label>
            <input type="text" placeholder="Enter Username" id="username" name="username" onChange={onChange} required/>
            <label htmlFor="password" className="my-form-extra">Password</label>
            <input type="password" placeholder="Enter Password" id="password" name="password" onChange={onChange} required/>
            <button
              type="button"
              id="login-button"
              onClick={handleLogin}>Login
            </button>
          </div>
          <div className="form-forgot">
            <small>Forgot Password?</small>
          </div>
        </form>
      </div>
    </div>
  </div>
);


export default LoginComponent;