import { Table } from '@/components/layout/table/table'
import { RowSkeleton } from '@/components/skeletons/table/row.skeleton'
import { PokemonListEntrySkeleton } from '@/components/skeletons/pokemon-list-entry.skeleton'
import { Panel } from '@/components/layout/panel'
import { Skeleton } from '@/components/skeletons/skeleton'
import { Title } from '@/components/layout/title'

export default function Loading() {
  return (
    <>
      <Title>Pokemon List</Title>
      <Panel>
        <div className="flex flex-col py-3 space-y-3 lg:space-y-0 lg:space-x-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center space-x-4">
            <h5 className="flex items-center">
              <span className="text-gray-500 mr-1.5">Total Pokemon:</span>
              <span>
                <Skeleton className="block h-5 w-10"/>
              </span>
            </h5>
          </div>
        </div>

        <Table columns={ ['Name', 'Pokedex-Nr.', 'Types', 'HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'] }>
          <RowSkeleton count={ 20 } element={ <PokemonListEntrySkeleton/> }/>
        </Table>
      </Panel>
    </>
  )
}