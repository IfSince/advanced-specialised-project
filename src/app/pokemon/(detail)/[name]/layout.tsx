import { Title } from '@/components/layout/title'
import { formatName } from '@/lib/util/typography'
import { PokemonTypes } from '@/components/pokemon-types'
import { sortAndMapPokemonTypes } from '@/lib/util/mappers/sort-and-map-pokemon-types'
import { getPokemonDetailByName } from '@/lib/data/get-pokemon-detail-by-name'
import { getPokemonList } from '@/lib/data/get-pokemon-list'
import { ReactNode } from 'react'
import { reloadPokemonDetail } from '@/lib/actions/revalidate-pokemon-detail'
import { RefreshDataButton } from '@/components/layout/buttons/refresh-data-button'

export const dynamicParams = false

export async function generateStaticParams() {
  const names = await getPokemonList()
  return names.results.map(result => ({ name: result.name }))
}

export default async function Layout({
  params: { name },
  abilities,
  baseInformation,
  sprites,
  stats,
  typeEffectiveness,
  moves,
  evolutions,
}: {
  params: { name: string }
  abilities: ReactNode
  baseInformation: ReactNode
  sprites: ReactNode
  stats: ReactNode
  typeEffectiveness: ReactNode
  moves: ReactNode
  evolutions: ReactNode
}) {
  const data = await getPokemonDetailByName(name)

  return (
    <>
      <Title>
          <span className="flex justify-between">
            <span className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>{ formatName(name) }</span>
              <PokemonTypes types={ sortAndMapPokemonTypes(data.types) }/>
            </span>
            <RefreshDataButton action={ reloadPokemonDetail.bind(null, name) }/>
          </span>
      </Title>
      { baseInformation }
      <div className="grid gap-x-4 lg:grid-cols-2 xl:grid-cols-3">
        { sprites }
        { abilities }
      </div>
      <div className="grid grid-cols-1 gap-x-4 xl:grid-cols-2">
        { stats }
        { typeEffectiveness }
      </div>
      { moves }
      { evolutions }
    </>
  )
}