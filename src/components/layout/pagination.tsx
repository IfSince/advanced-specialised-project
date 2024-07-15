'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { generatePagination } from '@/lib/util/generate-pagination'
import { ArrowLeft } from '@/components/icons/arrow-left'
import { ArrowRight } from '@/components/icons/arrow-right'
import { DoubleArrowRight } from '@/components/icons/double-arrow-right'
import { DoubleArrowLeft } from '@/components/icons/double-arrow-left'

export const Pagination = ({ total, pageKey = 'page' }: { total: number, pageKey?: string }) => {
  const classes = 'transition-colors flex h-full items-center justify-center text-sm leading-tight border text-gray-400 border-gray-700 hover:bg-gray-700 hover:text-white px-3.5 py-2'

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get(pageKey)) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set(pageKey, pageNumber.toString())
    return `${ pathname }?${ params.toString() }`
  }

  const allPages = generatePagination(currentPage, total)

  const Arrow = ({ direction, page }: { direction: 'left' | 'right' | 'first' | 'last', page: number }) =>
    <li>
      <Link className={ clsx(classes, {
        left: '',
        right: '',
        first: 'rounded-l-lg',
        last: 'rounded-r-lg',
      }[direction]) }
            href={ createPageURL(page) }>
      <span className="flex items-center justify-center">
        { {
          left: <ArrowLeft className="h-6 w-6 fill-white"/>,
          right: <ArrowRight className="h-6 w-6 fill-white"/>,
          first: <DoubleArrowLeft className="h-6 w-6 fill-white"/>,
          last: <DoubleArrowRight className="h-6 w-6 fill-white"/>,
        }[direction] }
      </span>
      </Link>
    </li>

  return (
    <ul className="inline-flex items-stretch -space-x-px">
      <Arrow direction="first" page={ 1 }/>
      <Arrow direction="left" page={ currentPage <= 1 ? 1 : currentPage - 1 }/>
      {
        allPages.map((page, index) =>
          <li key={ page }>
            <Link className={ clsx(classes, page === currentPage && 'bg-gray-700 text-white', page !== currentPage && 'bg-gray-800') }
                  href={ createPageURL(page) }>
              { page }
            </Link>
          </li>,
        )
      }
      <Arrow direction="right" page={ currentPage >= total ? total : currentPage + 1 }/>
      <Arrow direction="last" page={ total }/>
    </ul>
  )
}