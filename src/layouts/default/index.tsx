import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { navRouteList, URLS } from '../../routes/routes'

import { IDefaultLayoutProps } from './interface'
const DefaultLayout: React.FC<IDefaultLayoutProps> = props => {
  const { children } = props

  return (
    <>
      <Navbar />

      {children}
      <Outlet />
    </>
  )
}

export default DefaultLayout

const Navbar = () => {
  return (
    <nav
      className='
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-0.5
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  h-12
  '
    >
      <div className='container-fluid w-full flex flex-wrap items-center justify-between px-1'>
        <div className='flex flex-grow items-center'>
          <Link className='flex items-center ' to={URLS.DEFAULT}>
            <img
              className='h-full w-10 mr-0.5'
              alt=''
              src='/images/svg/logo.svg'
            />
            <span className='text-blue-700 hover:text-blue-800 text-lg font-semibold'>
              Dummy Mart
            </span>
          </Link>
          <LeftNav />
        </div>
      </div>
    </nav>
  )
}

const LeftNav = () => {
  return (
    <div className='ml-4'>
      {navRouteList.map(cRoute => (
        <Link to={cRoute.url} key={`nav-${cRoute.id}`}>
          <span className='text-gray-500 hover:text-gray-400 text-lg font-semibold mr-2'>
            {cRoute.title}
          </span>
        </Link>
      ))}
    </div>
  )
}
