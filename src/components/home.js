import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <div class="nav-container">
          <div class="nav-logo">
            <img src="images/shopping-list.png" />
          </div>
          <div class="nav-logo-text">STORE MANAGER</div>
          <div class="nav-menu">
            <NavLink to="/register" id="nav-menu-link">Register</NavLink>
            <button
              type="button"
              value="Submit"
              onclick="location.href='register-admin.html';">
              REGISTER ADMIN
            </button>
          </div>
        </div>

        <div class="main-section login-section">
          <div class="form-section">
            <div class="form-header">Welcome, Log In</div>
            <div class="my-form">
              <form action="#" id="form1">
                <div class="container">
                  <label for="username" class="my-form-extra">Username</label>
                  <input type="text" placeholder="Enter Username" id="username" required />
                    <label for="password" class="my-form-extra">Password</label>
                    <input type="password" placeholder="Enter Password" id="password" required />
                      <button type="button" value="Submit"
                              id="login-button" onclick="loginUser()">Login</button>
                </div>
                <div class="form-forgot"><small>Forgot Password?</small></div>
              </form>
            </div>
          </div>
          <div id="snackbar"></div>
        </div>

        <div className="footer-content login-section footer-section">
          <footer>
            &copy; Copyright 2018 Store Manager
          </footer>
        </div>
      </div>
    );
  }
}

export default HomeComponent;