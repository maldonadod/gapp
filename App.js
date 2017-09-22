import React, { Component } from 'react'
import { StyleSheet,View,NavigatorIOS,Text } from 'react-native'
import { Provider } from 'react-redux'
import {connect} from 'react-redux'

import Login from './src/business/login'
import store from './store'

import {
  HomeRoute
} from './routes'

class OnError extends Component {
  render() {
    const {error=false,message="",children} = this.props
    return (
      <View style={styles.container}>
        {this.props.children}
        {error && <Text>{message}</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center'
  }
})

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
