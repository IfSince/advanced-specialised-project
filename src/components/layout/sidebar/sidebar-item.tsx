'use client'

import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

export interface SidebarItemProps {
  title: string
  href: string
  icon: ReactNode
  external?: boolean
}

export const SidebarItem = ({ href, title, icon }: SidebarItemProps) => {
  const pathname = usePathname()

  return (
    <li>
      <Link href={ href }
            className={ clsx(
              'flex items-center rounded-md p-2 text-base font-normal text-white transition duration-75 group hover:bg-gray-700',
              pathname === href && 'active bg-gray-700',
            ) }>
        { icon }
        <span className="ml-3">{ title }</span>
      </Link>
    </li>
  )
}