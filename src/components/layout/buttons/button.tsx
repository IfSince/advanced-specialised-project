'use client'

import { ButtonHTMLAttributes, DOMAttributes, HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  className?: HTMLAttributes<HTMLButtonElement>['className']
  type?: ButtonHTMLAttributes<unknown>['type']
  click?: DOMAttributes<HTMLButtonElement>['onClick']
  icon?: ReactNode
  text?: string
  size?: 'md' | 'lg'
  disabled?: boolean
}

export const Button = ({ className = '', type = 'button', click = void 0, icon, text, size = 'md' }: ButtonProps) =>
  <button className={ clsx(
    `border border-gray-600 bg-gray-800 transition-colors rounded-lg text-gray-200 font-medium flex justify-center items-center fill-gray-200
     hover:text-white hover:bg-gray-700 hover:fill-white
     focus-visible:border focus-visible:bg-gray-700 focus-visible:text-white focus-visible:outline-none focus-visible:fill-white
     disabled:text-gray-600 disabled:border-gray-700 disabled:hover:text-gray-600 disabled:hover:bg-gray-800 disabled:fill-gray-600 disabled:hover:fill-gray-600
     `,
    className,
    text != null && 'px-3 py-2',
    icon != null && text == null && 'p-2',
    size === 'md' && 'text-sm',
    size === 'lg' && 'text-base',
  ) }
          type={ type }
          onClick={ click }>
    {
      icon && <span className={ clsx(
        'flex justify-center items-center text-lg',
        text != null && 'mr-2',
        size === 'md' && 'h-4 w-4',
        size === 'lg' && 'h-6 w-6',
      ) }>
      { icon }
    </span>
    }
    { text }
  </button>