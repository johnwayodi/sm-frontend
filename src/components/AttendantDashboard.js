import React, { Component } from 'react';

class AttendantDashboard extends Component {
  render() {
    return (
      <div className="main-section">
        <div className="dashboard-section">
          <div className="dash-header">Dashboard - Store Attendant</div>
          <div className="dash-components">
            <div className="dash-component" onClick="location.href='products.html';">
              <div className="dash-component-icon"><img src="./public/images/shopping-bag.png" alt="Smiley face"/></div>
              <div className="dash-component-title">Products</div>
              <div className="dash-component-help">View and add Products to Shopping Cart.</div>
            </div>
            <div className="dash-component" onClick="location.href='cart.html';">
              <div className="dash-component-icon"><img src="./public/images/shopping-cart.png" alt="Smiley face"/></div>
              <div className="dash-component-title">Shopping Cart</div>
              <div className="dash-component-help">View and modify products in Shopping Cart.</div>
            </div>
            <div className="dash-component" onClick="location.href='sale-records-all.html';">
              <div className="dash-component-icon"><img src="images/sale-report.png" alt="Smiley face"/></div>
              <div className="dash-component-title">Records</div>
              <div className="dash-component-help">View My Sales Records.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AttendantDashboard;