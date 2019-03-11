import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginComponent from '../components/LoginForm';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/LoginActions/actions';
import { bindActionCreators } from 'redux';

class LoginView extends Component {
  state = { username: '', password: '' };

  componentDidMount() {
    this.setState({ login: { success: false } });
  }

  handleLogin = (e) => {
    const {
      loginUser: loginAction,
      login, history,
    } = this.props;
    e.preventDefault();
    const userDetails = this.state;
    const data = {
      username: userDetails.username,
      password: userDetails.password,
    };

    loginAction(data);

    setTimeout(() => {
      if (login.success === true) {
        history.push({
          pathname: '/attendant',
          state: { role: login.role }
        })
      }
    }, 2000);
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { login } = this.props;
    return (
      <div>
        <LoginComponent
          onChange={this.onChange}
          handleLogin={this.handleLogin}
          login={login}
        />
      </div>
    )
  }
}

LoginView.propTypes = {
  loginUser: PropTypes.func.isRequired,
  login: PropTypes.shape.isRequired,
};

const mapStateToProps = ({ login }) => ({ login });

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
