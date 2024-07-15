import { PokemonDetail } from '@/lib/models/pokemon-detail.model'
import { PokemonListDetail } from '@/lib/models/pokemon-list-detail.model'
import { mapPokemonBaseStats } from '@/lib/util/mappers/map-pokemon-base-stats'
import { sortAndMapPokemonTypes } from '@/lib/util/mappers/sort-and-map-pokemon-types'

export const mapPokemonListDetail = (detail: PokemonDetail): PokemonListDetail => ({
  id: detail.id,
  name: detail.name,
  imageUrl: detail.sprites.front_default,
  types: sortAndMapPokemonTypes(detail.types),
  baseStats: mapPokemonBaseStats(detail.stats),
})