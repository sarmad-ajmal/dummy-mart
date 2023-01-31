import * as React from 'react'
import { IButton } from './interface'

const Pill = (props: IButton) => {
  const { children, className = '', ...restProps } = props
  return (
    <button
      className={`absolute right-2  inline-block my-2 px-2 py-0.5 bg-gray-200 text-slate-600 opacity-70 font-medium text-xs 
      leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg 
      focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 
      active:shadow-lg transition duration-150 ease-in-out ${className}`}
      {...restProps}
    >
      {children}
    </button>
  )
}
export default Pill
