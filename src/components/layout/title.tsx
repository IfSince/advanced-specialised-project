import { ReactNode } from 'react'
import { Panel } from '@/components/layout/panel'

export const Title = ({ children }: Readonly<{ children: ReactNode }>) =>
  <Panel>
    <h1 className="text-2xl font-medium">
      { children }
      <hr className="my-1 border border-gray-600"/>
    </h1>
  </Panel>
