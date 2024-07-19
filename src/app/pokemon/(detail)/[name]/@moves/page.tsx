import { getPokemonDetailByName } from '@/lib/data/get-pokemon-detail-by-name'
import { getMoveByName } from '@/lib/data/get-move-by-name'
import { Panel } from '@/components/layout/panel'
import { Moves } from '@/components/pokemon-detail/moves'

export default async function MovesPanelPage({ params: { name } }: { params: { name: string } }) {
  const { moves: moveApiLinks } = await getPokemonDetailByName(name)

  const moves = await Promise.all(moveApiLinks.map(({ move: apiLink }) => getMoveByName(apiLink.name)))

  const movesWithVersionGroup = moveApiLinks.map(move => ({
    move: moves.find(it => it.name === move.move.name)!,
    versionGroupDetails: move.version_group_details,
  }))

  return (
    <Panel>
      <Moves moveWithVersionGroupDetails={ movesWithVersionGroup }/>
    </Panel>
  )
}