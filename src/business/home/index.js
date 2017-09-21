import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
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
});

export default Home
