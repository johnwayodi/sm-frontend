import React, { Component } from 'react';

class AdminDashboard extends Component {
  render() {
    return (
      <div className="main-section">
        <div className="dashboard-section">
          <div className="dash-header">Dashboard | Admin</div>
          <div className="dash-components">
            <div className="dash-component" onClick="location.href='products-admin.html';">
              <div className="dash-component-icon"><img src="images/boxes.png" alt="Smiley face"/></div>
              <div className="dash-component-title">Products</div>
              <div className="dash-component-help">Manage Products.</div>
            </div>
            <div className="dash-component" onClick="location.href='all-attendants.html';">
              <div className="dash-component-icon"><img src="images/employee.png" alt="Smiley face"/></div>
              <div className="dash-component-title">Store Attendants</div>
              <div className="dash-component-help">Manage Store Attendants.</div>
            </div>
            <div className="dash-component" onClick="location.href='sale-records-admin.html';">
              <div className="dash-component-icon"><img src="images/sale-report.png" alt="Smiley face"/></div>
              <div className="dash-component-title">Records</div>
              <div className="dash-component-help">View All Sales Records.</div>
            </div>
            <div className="dash-component" onClick="location.href='categories-admin.html';">
              <div className="dash-component-icon"><img src="images/list.png" alt="Smiley face"/></div>
              <div className="dash-component-title">Categories</div>
              <div className="dash-component-help">Manage Categories.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;