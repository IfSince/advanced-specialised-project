import Link from 'next/link'
import { Suspense } from 'react'
import { getPokemonList } from '@/lib/data/get-pokemon-list'
import { PokemonSearch } from '@/components/pokemon-search'

export const Header = async () => {
  const names = await getPokemonList().then(({ results }) => results.map(it => it.name))

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-700 bg-gray-800 px-4 py-2.5">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-start">
          <Link href="/" className="mr-4 flex items-center justify-between focusable">
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">PokéWiki</span>
          </Link>
        </div>

        <Suspense>
          <PokemonSearch initialList={ names }/>
        </Suspense>
      </div>
    </header>
  )
}