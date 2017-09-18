import React, { Component } from 'react'
import { StyleSheet,View } from 'react-native'
import { Provider } from 'react-redux'

import Login from './src/business/login'
import store from './store'

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Login />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center'
  }
})
