import React, { Component } from 'react';

class AttendantDashboard extends Component {
  render() {
    return (
      <div>
        <div className="nav-container">
          <div className="nav-logo"><img src="images/shopping-list.png" /></div>
          <div className="nav-logo-text">STORE MANAGER</div>
          <div className="nav-menu">
            <button type="submit" onClick="location.href='attendant-profile.html';">PROFILE</button>
            <button ttype="button" value="Submit" onClick="logoutUser()">LOG OUT</button>
          </div>
        </div>

        <div className="main-section">
          <div className="dashboard-section">
            <div className="dash-header">Dashboard - Store Attendant</div>
            <div className="dash-components">
              <div className="dash-component" onClick="location.href='products.html';">
                <div className="dash-component-icon"><img src="images/shopping-bag.png" /></div>
                <div className="dash-component-title">Products</div>
                <div className="dash-component-help">View and add Products to Shopping Cart.</div>
              </div>
              <div className="dash-component" onClick="location.href='cart.html';">
                <div className="dash-component-icon"><img src="images/shopping-cart.png" /></div>
                <div className="dash-component-title">Shopping Cart</div>
                <div className="dash-component-help">View and modify products in Shopping Cart.</div>
              </div>
              <div className="dash-component" onClick="location.href='sale-records-all.html';">
                <div className="dash-component-icon"><img src="images/sale-report.png" /></div>
                <div className="dash-component-title">Records</div>
                <div className="dash-component-help">View My Sales Records.</div>
              </div>

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

export default AttendantDashboard;