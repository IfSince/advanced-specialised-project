import { ReactNode, Suspense } from 'react'
import { Pagination } from '@/components/layout/pagination'

interface TableProps {
  children: ReactNode
  columns: string[]
  paginationConfig?: {
    pageKey?: string
    total: number
    limit: number
    offset: number
  }
}

export const Table = ({ columns, children, paginationConfig }: TableProps) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-400">
          <thead className="whitespace-nowrap bg-gray-700 text-xs uppercase text-gray-400">
            <tr>
              {
                columns.map(column => <th scope="col" className="px-4 py-3" key={ column }>{ column }</th>)
              }
            </tr>
          </thead>
          <tbody>
            { children }
          </tbody>
        </table>
      </div>
      {
        paginationConfig &&
        <nav className="flex flex-col items-start justify-between py-4 space-y-3 md:space-y-0 md:flex-row md:items-center" aria-label="Table navigation">
              <span className="text-sm font-normal text-gray-400 space-x-1">
                <span>Showing</span>
                <span className="font-semibold text-white">{ 1 + paginationConfig.offset } - { paginationConfig.limit + paginationConfig.offset }</span>
                <span>of</span>
                <span className="font-semibold text-white">{ paginationConfig.total }</span>
              </span>
          <Suspense>
            <Pagination total={ Math.round(paginationConfig.total / paginationConfig.limit + 1) } pageKey={ paginationConfig.pageKey }/>
          </Suspense>
        </nav>

      }
    </>
  )
}