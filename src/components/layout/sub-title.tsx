import { ReactNode } from 'react'
import clsx from 'clsx'

export const SubTitle = ({ children, className = 'pt-4' }: Readonly<{ children: ReactNode, className?: string }>) =>
  <h2 className={ clsx('text-xl font-medium capitalize', className) }>
    { children }
    <hr className="mt-1 mb-4 border border-gray-600"/>
  </h2>