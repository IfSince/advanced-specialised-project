import clsx from 'clsx'
import { ReactNode } from 'react'

export const Row = ({ children, click }: { children: ReactNode, click?: () => void }) => {
  return (
    <tr onClick={ click }
        className={ clsx(
          'border-b border-gray-600',
          click && 'cursor-pointer transition-colors hover:bg-gray-700',
        ) }>
      { children }
    </tr>
  )
}