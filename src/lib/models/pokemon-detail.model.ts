import { PokemonBaseStats } from '@/lib/models/pokemon-base-stats.model'
import { ApiLink } from '@/lib/models/api-link.model'

export interface PokemonDetail {
  id: number
  name: string
  height: number
  weight: number
  base_experience: number
  types: { slot: number, type: ApiLink }[]
  stats: {
    base_stat: number
    effort: number
    stat: { name: keyof PokemonBaseStats, url: string }
  }[]
  species: ApiLink
  sprites: {
    front_default: string
    front_shiny: string
    back_default?: string
    back_shiny?: string
  }
  abilities: {
    ability: ApiLink,
    is_hidden: boolean
  }[]
  moves: {
    move: ApiLink
    version_group_details: {
      level_learned_at: number,
      version_group: ApiLink,
      move_learn_method: ApiLink,
    }[]
  }[]
  game_indices: { game_index: number, version: ApiLink }[]
}