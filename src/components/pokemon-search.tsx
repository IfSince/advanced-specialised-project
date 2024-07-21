'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { formatName, removeDash } from '@/lib/util/typography'
import { SearchIcon } from '@/components/icons/search-icon'
import Link from 'next/link'

export const PokemonSearch = ({ initialList }: { initialList: string[] }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace, push } = useRouter()
  const [filteredList, setFilteredList] = useState<string[]>([])

  const updateFilteredList = (value: string): void => value
    ? setFilteredList(initialList.filter(item => removeDash(item).toLowerCase().includes(value.toLowerCase())).slice(0, 4))
    : setFilteredList([])

  const handleInputChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    value ? params.set('query', value) : params.delete('query')

    replace(`${ pathname }?${ params.toString() }`)
    updateFilteredList(value)
  }

  useEffect(() => {
    const currentQuery = searchParams.get('query')?.toString()
    currentQuery && updateFilteredList(currentQuery)
  }, [])

  return (
    <>
      <label htmlFor="search" className="sr-only">Search</label>
      <div className="relative w-40 md:w-96 group *:transition-colors">
        <input className="block w-full rounded-md border border-gray-600 bg-gray-700 pl-10 text-sm text-gray-400 p-2.5 placeholder-gray-400 peer
                     hover:border-gray-500 hover:text-white
                     focus-visible:border focus-visible:border-gray-400 focus-visible:text-white focus-visible:outline-none"
               id="search"
               placeholder="Search"
               defaultValue={ searchParams.get('query')?.toString() }
               onChange={ (e) => handleInputChange(e.target.value) }/>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center peer-focus:fill-white fill-gray-400 pl-3 group-hover:fill-gray-300">
          <SearchIcon className="h-6 w-6"/>
        </div>
        {
          filteredList.length > 0 &&
          <div className="absolute z-10 group-focus-within:block hidden w-full rounded-lg bg-gray-700 shadow-md divide-y divide-gray-100">
            <ul className="text-sm text-gray-200">
              {
                filteredList.map(entry =>
                  <li key={ entry }>
                    <Link className="block rounded-lg py-4 pr-4 pl-10 transition-colors hover:bg-gray-600 hover:text-white"
                          href={ `/pokemon/${ entry }` }>
                      { formatName(entry) }
                    </Link>
                  </li>,
                )
              }
            </ul>
          </div>
        }
      </div>
    </>
  )
}