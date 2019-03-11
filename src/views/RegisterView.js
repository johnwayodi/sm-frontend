import React, { Component } from 'react';
import RegisterComponent from '../components/RegisterForm';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registerUser } from '../redux/actions/RegisterActions/actions';
import { withRouter } from 'react-router';

class RegisterView extends Component {
  state = { username: '', password: '' };

  componentDidMount() {
    this.setState({ login: { success: false } });
  }

  handleRegister = (e) => {
    const {
      registerUser: registerAction,
      register
    } = this.props;
    const { username, password } = this.state;
    e.preventDefault();
    const data = {
      username,
      password
    };
    registerAction(data);

    if (register.success === true) {
      setTimeout(() => {
        const { history } = this.props;
        history.push({
          pathname: '/',
        });
      }, 3000);
    }
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { register } = this.props;
    return (
      <div>
        <RegisterComponent
          onChange={this.onChange}
          handleRegister={this.handleRegister}
          register={register}
        />
      </div>
    )
  }
}

RegisterView.propTypes = {
  registerUser: PropTypes.func.isRequired,
  register: PropTypes.shape.isRequired,
};

const mapStateToProps = ({ register }) => ({ register });

const mapDispatchToProps = dispatch => bindActionCreators({
  registerUser,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterView));