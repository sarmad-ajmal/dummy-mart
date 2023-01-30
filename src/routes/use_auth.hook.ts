import { useMemo } from 'react'

import { useAppSelector } from '../redux/redux.hooks'

const useAuth = () => {
  const token = useAppSelector(state => state.auth.me?.token)

  const isLogin = useMemo(() => {
    return !!token
  }, [token])

  return { isLogin }
}

export default useAuth
