import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Login
} from '../../components/Login'

class LoginContainer extends Component {

  onInputEmail = input => this.email = input

  onInputPassword = input => this.password = input

  onSubmit = e => {
    const {
      email
      ,password
    } = this;

    this.props.login({email,password})
  }

  render() {
    return (
      <Login
        onInputEmail={this.onInputEmail}
        onInputPassword={this.onInputPassword}
        onSubmit={this.onSubmit} />
    )
  }
}

const dispatchs = dispatch => ({
  login: credentials => dispatch({
    type: 'LOGIN_REQUEST',
    credentials
  })
})

export default connect(null, dispatchs)(LoginContainer)
