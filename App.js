import React, { Component } from 'react'
import { StyleSheet,View,NavigatorIOS } from 'react-native'
import { Provider } from 'react-redux'
import {connect} from 'react-redux'

import Login from './src/business/login'
import store from './store'

import {
  HomeRoute
} from './routes'

class Flow extends Component {

  render() {
    const {user} = this.props.auth

    if (!user) {
      return (
        <Login />
      )
    }

    return (
      <NavigatorIOS
        initialRoute={HomeRoute}
        style={{flex:1}}
      />
    )
  }
}

const mapState = state => ({
  auth: state.auth
})

const FlowContainer = connect(mapState)(Flow)

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <FlowContainer />
      </Provider>
    );
  }
}
