import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './home';
import Register from './register';
import AttendantDashboard from './attendantDashboard';
import '../public/css/style.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact={true} path="/" component={HomeComponent} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard-att" component={AttendantDashboard} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;