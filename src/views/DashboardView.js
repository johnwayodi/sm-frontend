import React, { Component } from 'react';
import AttendantDashboard from '../components/AttendantDashboard';
import AdminDashboard from '../components/AdminDashboard';

class DashboardView extends Component {
  render() {
    const {location} = this.props;
    const{role} = location.state;
    console.log(role);
    return (
      <div>
        {role !== 'admin' ? (
        <AttendantDashboard />
        ) : <AdminDashboard />}
      </div>
    )
  }
}

export default DashboardView;