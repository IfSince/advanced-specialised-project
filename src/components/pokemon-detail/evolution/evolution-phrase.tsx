import { EvolutionDetail, EvolutionTriggers } from '@/lib/models/evolution-chain.model'
import { ReactNode } from 'react'
import { RareCandy } from '@/components/icons/rare-candy'
import { ExternalIcon } from '@/components/icons/external-icon'
import { formatName } from '@/lib/util/typography'
import { SwapHoriz } from '@/components/icons/swap-horiz'
import { LightModeIcon } from '@/components/icons/light-mode-icon'
import { DarkModeIcon } from '@/components/icons/dark-mode-icon'
import { WbTwilight } from '@/components/icons/wb-twilight'

const mapTriggerName = (triggerName: EvolutionTriggers, hasTrade: boolean): string | ReactNode => {
  switch (triggerName) {
    case 'level-up':
      return 'level up'
    case 'use-item':
      return 'use'
    case 'trade':
      return `trade ${ !hasTrade ? 'for any Pokémon' : '' }`
    case 'shed':
      return (
        <>
          <RareCandy/> Level 20 with PokéBall in bag and open slot in party
        </>
      )
    case 'three-critical-hits':
      return 'perform three critical hits'
    case 'other':
      return 'Other'
    default:
      return ''
  }
}

const TIME_OF_DAY_ICONS: Record<string, ReactNode> = {
  day: <LightModeIcon className="fill-gray-400 h-7 w-7"/>,
  night: <DarkModeIcon className="fill-gray-400 h-7 w-7"/>,
  dusk: <WbTwilight className="fill-gray-400 h-7 w-7"/>,
}

const PHYSICAL_STATS: Record<number, string> = {
  1: 'more Attack than Defense',
  0: 'the same as Attack and Defense',
  [-1]: 'less Attack than Defense',
}

export const EvolutionPhrase = ({
  triggers: {
    gender,
    held_item,
    item,
    known_move,
    known_move_type,
    location,
    min_affection,
    min_beauty,
    min_happiness,
    min_level,
    needs_overworld_rain,
    party_species,
    party_type,
    relative_physical_stats,
    time_of_day,
    trade_species,
    trigger,
    turn_upside_down,
  },
}: { triggers: EvolutionDetail }): ReactNode =>
  <li className="flex flex-col items-center gap-1 px-1 py-1">
    {
      (held_item || min_level || item || !!time_of_day || trigger?.name === 'trade' || trade_species) &&
      <div className="flex flex-row items-center justify-center gap-2">
        { min_level && <RareCandy/> }
        { trigger?.name === 'trade' && <SwapHoriz className="h-7 w-7 fill-gray-400"/> }
        { trade_species && <ExternalIcon type="tradeSpecies" { ...trade_species }/> }
        { held_item && <ExternalIcon type="evoItem" { ...held_item }/> }
        { item && <ExternalIcon type="evoItem" { ...item }/> }
        { !!time_of_day && TIME_OF_DAY_ICONS[time_of_day] }
      </div>
    }

    <p className="break-words text-center first-letter:uppercase">
      { min_level ? `reach level ${ min_level }` : trigger?.name !== 'level-up' && mapTriggerName(trigger?.name as EvolutionTriggers, !!trade_species) }
      { location && `${ trigger?.name && mapTriggerName(trigger?.name as EvolutionTriggers, !!trade_species) } at ${ formatName(location.name) }` }
      { trade_species && ` for ${ formatName(trade_species.name) }` }
      { held_item && ` while holding ${ formatName(held_item.name) }` }
      { item && ` ${ formatName(item.name) }` }
      { known_move && ` learn move ${ formatName(known_move.name) }` }
      { min_happiness && ` has over ${ min_happiness } Happiness` }
      { min_affection && ` has over ${ min_affection } Affection` }
      { min_beauty && ` has over ${ min_beauty } beauty` }
      { time_of_day !== '' && time_of_day != null && ` during the ${ time_of_day }` }
      { needs_overworld_rain && ` in the rain` }
      { gender && `  (${ gender === 1 ? 'female' : 'male' } only)` }
      { relative_physical_stats !== null && ` having ${ PHYSICAL_STATS[relative_physical_stats] }` }
      { known_move_type && ` learn move from ${ formatName(known_move_type.name) } type` }
      { party_type && ` with a Pokémon of type ${ formatName(party_type.name) } in party` }
      { party_species && ` if there is a ${ formatName(party_species.name) } in party` }
      { turn_upside_down && ` by turning console upside-down` }
    </p>
  </li>