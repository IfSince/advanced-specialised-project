'use client'

import { Move } from '@/lib/models/move.model'
import { PokemonDetail } from '@/lib/models/pokemon-detail.model'
import { SubTitle } from '@/components/layout/sub-title'
import { Table } from '@/components/layout/table/table'
import { Row } from '@/components/layout/table/row'
import { Cell } from '@/components/layout/table/cell'
import { formatName } from '@/lib/util/typography'
import { mapGeneration, mapVersionToGroup } from '@/lib/util/game-version.utils'
import { useEffect, useState } from 'react'
import { GAME_VERSIONS } from '@/lib/models/game-versions'

interface MoveWithVersionGroupDetails {
  move: Move
  versionGroupDetails: PokemonDetail['moves'][0]['version_group_details'],
}

export const Moves = ({ moveWithVersionGroupDetails }: { moveWithVersionGroupDetails: MoveWithVersionGroupDetails[] }) => {
  const [gameVersion, setGameVersion] = useState<string>(GAME_VERSIONS[0].value)
  const [filteredMoves, setFilteredMoves] = useState<MoveWithVersionGroupDetails[]>([])

  const versionGroup = mapVersionToGroup(gameVersion)

  useEffect(() => {
    setFilteredMoves(moveWithVersionGroupDetails
      .filter(move => move.versionGroupDetails.some(detail => detail.version_group.name === versionGroup))
      .sort((a: MoveWithVersionGroupDetails, b: MoveWithVersionGroupDetails) => {
        const learnedAtA = a.versionGroupDetails.find(it => it.version_group.name === versionGroup)?.level_learned_at || 0
        const learnedAtB = b.versionGroupDetails.find(it => it.version_group.name === versionGroup)?.level_learned_at || 0
        return learnedAtA - learnedAtB
      }),
    )
  }, [moveWithVersionGroupDetails, gameVersion, versionGroup])

  return (
    <>
      <SubTitle>
        <span className="flex items-center justify-between">
          Moves
          <div>
            <label htmlFor="game" className="sr-only">Select Pokemon Game Version</label>
            <select className="transition-colors block w-full rounded-md border border-gray-600 bg-gray-700 text-sm p-2.5 placeholder-gray-400 peer
                       hover:border-gray-500 hover:text-white
                       focus-visible:border focus-visible:border-gray-400 focus-visible:text-white focus-visible:outline-none"
                    id="game"
                    onChange={ e => setGameVersion(e.target.value) }
                    value={ gameVersion }>
              {
                GAME_VERSIONS.map(option => <option key={ option.value } value={ option.value }>{ option.label }</option>)
              }
            </select>
          </div>
        </span>
      </SubTitle>
      <Table columns={ ['Level', 'Method', 'Name', 'Description', 'Damage Class', 'Damage Type', 'Power Points', 'Power', 'Accuracy', 'Generation'] }>
        {
          filteredMoves.map(({ move, versionGroupDetails }) => {
            const gameDetails = versionGroupDetails.find(it => versionGroup === it.version_group.name)
            return (
              <Row key={ move.id }>
                <Cell>{ gameDetails?.level_learned_at }</Cell>
                <Cell>{ formatName(gameDetails?.move_learn_method.name ?? '') }</Cell>
                <Cell role="header">{ move.names?.find(it => it.language.name === 'en')?.name }</Cell>
                <Cell multiLine={ true }>{ move.effect_entries.find(entry => entry.language.name === 'en')?.short_effect }</Cell>
                <Cell>{ formatName(move.damage_class.name) }</Cell>
                <Cell>{ formatName(move.type.name) }</Cell>
                <Cell>{ move.pp }</Cell>
                <Cell>{ move.power }</Cell>
                <Cell>{ move.accuracy }</Cell>
                <Cell>{ mapGeneration(move.generation.name) }</Cell>
              </Row>
            )
          })
        }
      </Table>
    </>
  )

}