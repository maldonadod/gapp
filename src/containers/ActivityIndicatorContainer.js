import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet,Text,View,ActivityIndicator} from 'react-native'

class ActivityIndicatorContainer extends Component {

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
        <ActivityIndicator style={styles.spinner} animating={this.props.animating} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center'
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
});

const statefulness = state => ({
  animating: state.network.busy
})

export default connect(statefulness, null)(ActivityIndicatorContainer)
