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

export default async function Page() {
  const data = await getPokemonList()
  // const details = await Promise.all(data.results.map(({ name }) => getPokemonDetailByName(name).then(mapPokemonListDetail)))

  return (
    <section>
      <Title>Pokemon List</Title>
      <Panel>
        <div className="flex flex-col py-3 space-y-3 lg:space-y-0 lg:space-x-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center space-x-4">
            <h5>
              <span className="text-gray-500 mr-1.5">Total Pokemon:</span>
              <span className="text-white">{ data.count }</span>
            </h5>
          </div>
        </div>

        <Table columns={ ['Name', 'Pokedex-Nr.', 'Types', 'HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'] }>
          <Suspense fallback={ <RowSkeleton count={ 20 } element={ <PokemonListEntrySkeleton/> }/> }>
            <PokemonList names={ data.results.map(result => result.name) }/>
          </Suspense>
        </Table>
      </Panel>
    </section>
  )
}

const PokemonList = async ({ names }: { names: string[] }) => {
  const details = await Promise.all(names.map(name => getPokemonDetailByName(name).then(mapPokemonListDetail)))
  return details.map(detail => <PokemonListElement key={ detail.name } { ...detail }/>)
}