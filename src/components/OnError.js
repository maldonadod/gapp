import React, { Component } from 'react'
import { StyleSheet,View,Text } from 'react-native'

class OnError extends Component {
  render() {
    const {error=false,message='',children} = this.props
    return (
      <View>
        {error && <Text style={styles.error}>{message}</Text>}
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    padding: 20,
    alignSelf: 'center'
  }
})

export default OnError