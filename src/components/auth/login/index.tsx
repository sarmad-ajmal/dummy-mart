import { Button, TextInput } from '../../../common/components'
import useLogin from './index.hook'

const Login = () => {
  const { email, password, handleSubmit, onChangeEmail, onChangePassword } =
    useLogin()
  return (
    <form onSubmit={handleSubmit}>
      <section className='h-screen'>
        <div className='px-20 h-full text-gray-800'>
          <div className='flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6'>
            <div className='grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0'>
              <img
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
                className='w-full'
                alt=''
              />
            </div>
            <div className='xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0'>
              <form>
                <div className='mb-6'>
                  <TextInput
                    type='text'
                    placeholder='Email address'
                    onChange={onChangeEmail}
                    value={email}
                  />
                </div>

                <div className='mb-6'>
                  <TextInput
                    type='password'
                    onChange={onChangePassword}
                    value={password}
                    placeholder='Password'
                  />
                </div>

                <div className='text-center lg:text-center'>
                  <Button>Login</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </form>
  )
}
export default Login
