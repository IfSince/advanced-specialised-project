import { ReactNode } from 'react'
import clsx from 'clsx'

export const Cell = ({ className, children, role = 'data', multiLine = false }: Readonly<{
  className?: string,
  children?: ReactNode,
  role?: 'data' | 'header',
  multiLine?: boolean
}>) => ({
  data: <td className={ clsx('px-4 py-2 font-medium text-white', !multiLine && 'whitespace-nowrap', className) }>{ children }</td>,
  header: <th scope="row" className={ clsx('whitespace-nowrap px-4 py-2 font-medium text-white', !multiLine && 'whitespace-nowrap', className) }>{ children }</th>,
})[role]