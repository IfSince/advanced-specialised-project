import { ApiLink } from '@/lib/models/api-link.model'

export type EvolutionTriggers = 'level-up' | 'trade' | 'use-item' | 'shed' | 'spin' | 'tower-of-darkness' | 'tower-of-waters' | 'three-critical-hits' | 'take-damage' | 'other' | 'agile-style-move' | 'strong-style-move' | 'recoil-damage'

export interface EvolutionDetail {
  item?: ApiLink
  trigger?: ApiLink
  gender?: number
  held_item?: ApiLink
  known_move?: ApiLink
  known_move_type?: ApiLink
  location?: ApiLink
  min_level?: number
  min_happiness?: number
  min_beauty?: number
  min_affection?: number
  needs_overworld_rain: boolean
  party_species?: ApiLink
  party_type?: ApiLink
  relative_physical_stats: number
  time_of_day: string
  trade_species?: ApiLink
  turn_upside_down: boolean
}

export interface ChainLink {
  id: number
  is_baby: boolean
  species: ApiLink
  evolution_details: EvolutionDetail[]
  evolves_to: ChainLink[]
}

export interface EvolutionChain {
  id: number
  baby_trigger_item?: string
  chain: ChainLink
}