export interface AuthReducerState {
  me: ILoggedinUser | null
}
export interface ILoggedinUser {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}
