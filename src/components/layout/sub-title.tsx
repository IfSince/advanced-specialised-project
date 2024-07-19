import { ReactNode } from 'react'

export const SubTitle = ({ children }: Readonly<{ children: ReactNode }>) =>
  <h2 className="text-xl font-medium capitalize">
    { children }
    <hr className="mt-1 mb-4 border border-gray-600"/>
  </h2>