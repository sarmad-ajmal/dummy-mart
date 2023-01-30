import { IRouteListType } from './interface'

export enum URLS {
  DEFAULT = '/secure/products',
  PRODUCTS = '/secure/products',
  LOGIN = '/login',
}

export enum ROUTES {
  DEFAULT = 'products',
  PRODUCTS = 'products',
  LOGIN = '/login',
}
export const navRouteList: IRouteListType = [
  {
    id: '1',
    title: 'Producuts',
    url: URLS.PRODUCTS,
  },
  {
    id: '2',
    title: 'Users',
    url: URLS.PRODUCTS,
  },
]
