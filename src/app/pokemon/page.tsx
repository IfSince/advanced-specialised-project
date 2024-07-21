import { getPokemonList } from '@/lib/data/get-pokemon-list'
import { getPokemonDetailByName } from '@/lib/data/get-pokemon-detail-by-name'
import { Panel } from '@/components/layout/panel'
import { Table } from '@/components/layout/table/table'
import { PokemonListElement } from '@/components/pokemon-list/pokemon-list-element'
import { mapPokemonListDetail } from '@/lib/util/mappers/map-pokemon-list-detail'
import { Title } from '@/components/layout/title'
import { Suspense } from 'react'
import { PokemonListEntrySkeleton } from '@/components/skeletons/pokemon-list-entry.skeleton'
import { RowSkeleton } from '@/components/skeletons/table/row.skeleton'
import { PokemonListResult } from '@/lib/models/pokemon-list-result.model'


export default async function Page({ searchParams }: { searchParams?: { page?: string } }) {
  // We determine the count one and then automatically cache it
  // We have to do this because of the way the API is designed
  const { count }: PokemonListResult = await getPokemonList(1)

  const page = +((searchParams?.page) || 1)
  const limit = 10
  const offset = page * limit - 10

  return (
    <section>
      <Title>Pokemon List</Title>
      <Panel>
        <div className="flex flex-col py-3 space-y-3 lg:space-y-0 lg:space-x-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center space-x-4">
            <h5>
              <span className="text-gray-500 mr-1.5">Total Pokemon:</span>
              <span className="text-white">{ count }</span>
            </h5>
          </div>
        </div>

        <Table columns={ ['Name', 'Pokedex-Nr.', 'Types', 'HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'] }
               paginationConfig={ { total: count, offset, limit } }>
          <Suspense key={ page } fallback={ <RowSkeleton count={ limit } element={ <PokemonListEntrySkeleton/> }/> }>
            <PokemonList limit={ limit } offset={ offset }/>
          </Suspense>
        </Table>
      </Panel>
    </section>
  )
}

const PokemonList = async ({ limit, offset }: { limit: number, offset: number }) => {
  const data = await getPokemonList(limit, offset)
  const details = await Promise.all(data.results.map(({ name }) => getPokemonDetailByName(name).then(mapPokemonListDetail)))

  return details.map(detail => <PokemonListElement key={ detail.name } { ...detail }/>)
}