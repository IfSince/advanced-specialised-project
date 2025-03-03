'use client'

import { SidebarItem, SidebarItemProps } from '@/components/layout/sidebar/sidebar-item'
import { Button } from '@/components/layout/buttons/button'
import { useState } from 'react'
import { DashboardIcon } from '@/components/icons/dashboard'
import clsx from 'clsx'
import { CloseIcon } from '@/components/icons/close'
import { MenuIcon } from '@/components/icons/menu'
import { HomeIcon } from '@/components/icons/home'
import { SchoolIcon } from '@/components/icons/school'
import { ExternalSidebarItem } from '@/components/layout/sidebar/external-sidebar-item'
import { CodeIcon } from '@/components/icons/code'

interface NavLinks {
  main: SidebarItemProps[]
  sub: SidebarItemProps[]
}

const NAV_LINKS: NavLinks = {
  main: [
    {
      title: 'Home',
      href: '/',
      icon: <HomeIcon className="h-6 w-6 fill-gray-400 transition duration-75 group-hover:fill-white group-[.active]:fill-white"/>,
    },
    {
      title: 'List',
      href: '/pokemon',
      icon: <DashboardIcon className="h-6 w-6 fill-gray-400 transition duration-75 group-hover:fill-white group-[.active]:fill-white"/>,
    },
  ],
  sub: [
    {
      title: 'E-learning',
      href: 'https://e-learning-mu-pearl.vercel.app/',
      icon: <SchoolIcon className="h-6 w-6 fill-gray-400 transition duration-75 group-hover:fill-white group-[.active]:fill-white"/>,
      external: true,
    },
    {
      title: 'Source code',
      href: 'https://github.com/IfSince/advanced-specialised-project',
      icon: <CodeIcon className="h-6 w-6 fill-gray-400 transition duration-75 group-hover:fill-white group-[.active]:fill-white"/>,
      external: true,
    },
  ],
}

export const Sidebar = () => {
  const renderLinks = (items: SidebarItemProps[]) => items.map(item =>
    item.external
      ? <ExternalSidebarItem key={ item.title } { ...item }/>
      : <SidebarItem key={ item.title } { ...item }/>,
  )

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const toggleSidebar = () => setSidebarOpen((prev) => !prev)

  return (
    <>
      <div className={ clsx('z-10 fixed top-0 left-0 w-full h-full bg-black opacity-30 md:hidden', { 'hidden': !sidebarOpen }) }
           onClick={ () => setSidebarOpen(false) }/>

      <Button className="fixed right-4 bottom-4 z-20 md:hidden"
              click={ toggleSidebar }
              icon={ sidebarOpen ? <CloseIcon className="h-6 w-6"/> : <MenuIcon className="h-6 w-6"/> }
              size="lg"/>

      <aside className={ clsx('fixed top-0 left-0 z-40 h-screen w-64 transition-transform md:translate-x-0 pt-14', !sidebarOpen && '-translate-x-full') }
             id="default-sidebar"
             aria-label="Sidenav">
        <nav className="h-full overflow-y-auto border-r border-gray-700 bg-gray-800 px-3 py-5">
          <ul className="space-y-2">
            { renderLinks(NAV_LINKS.main) }
          </ul>
          <ul className="mt-5 border-t border-gray-700 pt-5 space-y-2">
            { renderLinks(NAV_LINKS.sub) }
          </ul>
        </nav>
      </aside>
    </>
  )
}