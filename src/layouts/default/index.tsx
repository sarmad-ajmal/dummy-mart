import React from 'react'
import { Outlet } from 'react-router-dom'

import { IDefaultLayoutProps } from './interface'
const DefaultLayout: React.FC<IDefaultLayoutProps> = props => {
  const { children } = props

  return (
    <>
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
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  h-25
  '
    >
      <div className='container-fluid w-full flex flex-wrap items-center justify-between px-6'>
        <div
          className='collapse navbar-collapse flex-grow items-center'
          id='navbarSupportedContent'
        ></div>
      </div>
    </nav>
  )
}
