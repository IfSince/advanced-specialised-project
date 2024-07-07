'use client'

import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

export interface NavItemProps {
  title: string
  href: string
  icon: ReactNode
}

export const SidebarItem = ({ href, title, icon }: NavItemProps) => {
  const pathname = usePathname()

  return (
    <li>
      <Link href={ href }
            className={ clsx(
              'flex items-center rounded-md p-2 text-base font-normal text-white transition duration-75 group hover:bg-gray-700',
              pathname === href && 'bg-gray-700',
            ) }>
        { icon }
        <span className="ml-3">{ title }</span>
      </Link>
    </li>
  )
}