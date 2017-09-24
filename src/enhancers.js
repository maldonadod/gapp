import React, {Component} from 'react'
import ActivityIndicatorContainer from './containers/ActivityIndicatorContainer'

export default function ActivityIndicatorEnhancer(Enhanced) {

  return class ActivityIndicatorEnhancer extends Component {

    render() {
      return (
        <ActivityIndicatorContainer><Enhanced /></ActivityIndicatorContainer>
      )
    }
  }
}
