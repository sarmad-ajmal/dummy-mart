import { useEffect } from 'react'
import { useAppDispatch } from '../../../redux/redux.hooks'
import { APIService } from '../../../services/api'
import { setMe } from '../../../slices/auth.slice'
import { Me } from './interface'

const useLogin = () => {
  const dispatch = useAppDispatch()
  const loginUser = async () => {
    const api = new APIService()
    const { res, error } = await api.post('/auth/login', {
      username: 'kminchelle',
      password: '0lelplR',
    })
    if (!error) {
      dispatch(setMe(res as Me))
    }
  }
  useEffect(() => {
    loginUser()
  }, [])
  return {}
}

export default useLogin
