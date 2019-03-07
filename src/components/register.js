import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div>
        <div class="nav-container">
          <div class="nav-logo"><img src="images/shopping-list.png" /></div>
          <div class="nav-logo-text">STORE MANAGER</div>
        </div>
        <div class="main-section login-section">
          <div class="form-section">
            <div class="form-header">Register the Administrator</div>
            <div class="my-form">
              <form action="#" id="form0">
                <div class="container">
                  <label for="username" class="my-form-extra">Admin Username</label>
                  <input type="text" placeholder="Enter Administrator Username" id="username" required />
                    <label for="password" class="my-form-extra">Admin Password</label>
                    <input type="password" placeholder="Enter Administrator Password" id="password" required />
                      <button type="button" value="Submit" id="register-button"
                              onclick="registerAdmin()">Register</button>
                </div>
                <div class="form-forgot"><small>Forgot Password?</small></div>
              </form>
            </div>
          </div>
          <div id="snackbar"></div>
        </div>
        <div class="footer-content login-section footer-section">
          <footer>
            &copy; Copyright 2018 Store Manager
          </footer>
        </div>

      </div>
    );
  }
}

export default Register;