import Home from '../src/business/home'

const RouteFactory = ({component,title,props}) => ({
  component
  ,title
  ,passProps: props
})

export const HomeRoute = RouteFactory({
  component: Home
  ,title: 'Welcome'
})
