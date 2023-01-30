import useLogin from './index.hook'

const Login = () => {
  const { email, password, handleSubmit, onChageEmail, onChangePassword } =
    useLogin()
  return <form onSubmit={handleSubmit}></form>
}
export default Login
