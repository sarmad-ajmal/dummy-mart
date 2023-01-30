import { useMemo } from 'react'
import { URLS } from './routes'

const useRedirect = ({ isLogin }: { isLogin: boolean }) => {
  const redirectTo = useMemo(() => {
    if (isLogin) {
      return URLS.DEFAULT
    } else {
      return URLS.LOGIN
    }
  }, [isLogin])

  return { redirectTo }
}

export default useRedirect
