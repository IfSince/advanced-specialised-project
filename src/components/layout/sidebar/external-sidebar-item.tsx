import { SidebarItemProps } from '@/components/layout/sidebar/sidebar-item'

export const ExternalSidebarItem = ({ href, title, icon }: SidebarItemProps) =>
  <li>
    <a className="flex items-center rounded-md p-2 text-base font-normal text-white transition duration-75 group hover:bg-gray-700"
       href={ href }
       target="_blank">
      { icon }
      <span className="ml-3">{ title }</span>
    </a>
  </li>