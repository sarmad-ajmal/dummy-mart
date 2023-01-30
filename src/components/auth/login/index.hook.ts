import { useEffect } from 'react'

import { useAppDispatch } from '../../../redux/redux.hooks'
import { APIService } from '../../../services/api'

import { getLoggedinUser } from '../../../slices/auth.slice'
import { ILoggedinUser } from '../interface'

const useLogin = () => {
  const dispatch = useAppDispatch()
  const loginUser = async () => {
    const api = new APIService()
    const { res, error } = await api.post('/auth/login', {
      username: 'kminchelle',
      password: '0lelplR',
    })
    if (!error) {
      dispatch(getLoggedinUser(res as ILoggedinUser))
    }
  }
  useEffect(() => {
    loginUser()
  }, [])
  return {}
}

export default useLogin
