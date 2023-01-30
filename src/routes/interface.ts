import { RouteProps } from 'react-router-dom'

export type IPublicRouteProps = RouteProps & {
  component: any
  restricted?: boolean // if true, only unauthenticated user have access
  // For example signin page after login
}

export type ILivestreamRouteProps = RouteProps & {
  component?: any
}

export interface IPrivateRouteProps {}

export interface IRouteType {
  id: string
  title: string
  iconName: string
  url: string
  extraUrls?: string[]
  count: number
}

export type IRouteListType = IRouteType[]
