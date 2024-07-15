import { PokemonBaseStats } from '@/lib/models/pokemon-base-stats.model'

export interface PokemonListDetail {
  id: number
  name: string
  imageUrl: string
  types: string[]
  baseStats: PokemonBaseStats
}