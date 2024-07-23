import { ReactNode } from 'react'
import clsx from 'clsx'

export interface PanelProps {
  children: ReactNode
  align?: 'left' | 'center'
  role?: 'header' | 'default'
  className?: string
}

export const Panel = ({ children, align = 'left', role = 'default', className = '' }: PanelProps) =>
  <div className={ clsx(
    'mb-4 px-4 rounded-md bg-gray-800 shadow-md relative last:mb-0',
    align === 'center' && 'flex justify-center items-center',
    className,
    role === 'header' && 'py-3',
    role === 'default' && 'pt-3 pb-8',
  ) }>
    { children }
  </div>