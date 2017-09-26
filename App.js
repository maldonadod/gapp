import React, { Component } from 'react'
import { StyleSheet,View,NavigatorIOS,Text,ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux'
import {connect} from 'react-redux'

import ActivityIndicatorEnhancer from './src/enhancers'
import Login from './src/business/login'
import store from './store'

import OnError from './src/components/OnError'

import {
  HomeRoute
} from './routes'

class Flow extends Component {

  render() {
    const {auth} = this.props
    if (!auth.user) {
      return (
        <OnError message={auth.message} error={auth.error}>
          <Login />
        </OnError>
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

const FlowContainer = ActivityIndicatorEnhancer(connect(mapState)(Flow))

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <FlowContainer />
      </Provider>
    );
  }
}
