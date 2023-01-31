import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { IPrivateRouteProps } from './interface'
import useAuth from './use_auth.hook'

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ children, ...rest }) => {
  const navigate = useNavigate()

  const { isLogin = false } = useAuth()
  useEffect(() => {
    if (!isLogin) {
      navigate('/login', { replace: true })
    }
  }, [isLogin, navigate])
  return <>{children}</>
}

export default PrivateRoute
