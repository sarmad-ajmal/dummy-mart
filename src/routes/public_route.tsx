import React from 'react'
import { Navigate } from 'react-router'

import useAuth from './use_auth.hook'

import { IPublicRouteProps } from './interface'

const PublicRoute: React.FC<IPublicRouteProps> = ({
  component: Component,
  restricted,
  ...rest
}) => {
  const { isLogin } = useAuth()
  if (isLogin && restricted) {
    return <Navigate to='/' />
  }
  return <Component {...rest} />
}

export default PublicRoute
