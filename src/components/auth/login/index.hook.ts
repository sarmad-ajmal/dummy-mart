import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../../redux/redux.hooks'
import { URLS } from '../../../routes/routes'
import { APIService } from '../../../services/api'

import { getLoggedinUser } from '../../../slices/auth.slice'
import { ILoggedinUser } from '../interface'

const useLogin = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e: any) => {
    setPassword(e.target.value)
  }
  const loginUser = async () => {
    if (!!email.trim() && !!password.trim()) {
      const api = new APIService()
      const { res, error } = await api.post('/auth/login', {
        username: email,
        password: password,
      })
      if (!error) {
        dispatch(getLoggedinUser(res as ILoggedinUser))
        navigate(URLS.PRODUCTS)
      }
    }
  }
  const handleSubmit = (event: any) => {
    event.preventDefault()
    loginUser()
  }

  return { email, password, handleSubmit, onChangeEmail, onChangePassword }
}

export default useLogin
