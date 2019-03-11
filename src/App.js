import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './public/css/style.css';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import NavBarComponent from './components/NavigationBar';
import FooterComponent from './components/Footer';
import DashboardView from './views/DashboardView';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <NavBarComponent/>
          <Switch>
            <Route path="/attendant" component={DashboardView} exact/>
            <Route path="/register" component={RegisterView} exact/>
            <Route path="/" component={LoginView} exact/>
          </Switch>
          <FooterComponent />
        </div>
      </HashRouter>
    );
  }
}

export default App;