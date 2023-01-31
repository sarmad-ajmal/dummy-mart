import { IRouteListType } from './interface'

export enum URLS {
  LOGIN = '/login',
  DEFAULT = '/secure/products',
  PRODUCTS = '/secure/products',
  USERS = '/secure/users',
}

export enum ROUTES {
  DEFAULT = 'products',
  PRODUCTS = 'products',
  LOGIN = '/login',
}
export const navRouteList: IRouteListType = [
  {
    id: '1',
    title: 'Products',
    url: URLS.PRODUCTS,
  },
  {
    id: '2',
    title: 'Users',
    url: URLS.USERS,
  },
]
