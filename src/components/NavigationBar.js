import React, { Component } from 'react';
import { withRouter } from 'react-router';

class NavBarComponent extends Component {
  goToRegister = (e) => {
    setTimeout(() => {
      const { history } = this.props;
      // this.context.router.push('/');
      history.push('/register');
    }, 1500);

  };

  render() {
    return (
      <div className="nav-container">
        <div className="nav-logo"><img src="../public/images/shopping-list.png" alt="Smiley face"/></div>
        <div className="nav-logo-text">STORE MANAGER</div>
        <div className="nav-menu">
          <button type="button" value="Submit" onClick={this.goToRegister}>REGISTER ADMIN</button>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBarComponent);