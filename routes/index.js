import React, {Component} from 'react'
import Home from '../src/business/home'
import ActivityIndicatorEnhancer from '../src/enhancers'

const RouteFactory = ({component,title,props}) => ({
  component
  ,title
  ,passProps: props
})

export const HomeRoute = RouteFactory({
  component: ActivityIndicatorEnhancer(Home)
  ,title: 'Welcome'
})
