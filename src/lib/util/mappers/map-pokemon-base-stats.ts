import { PokemonDetail } from '@/lib/models/pokemon-detail.model'
import { PokemonBaseStats } from '@/lib/models/pokemon-base-stats.model'

export const mapPokemonBaseStats = (stats: PokemonDetail['stats']): PokemonBaseStats =>
  stats.reduce((prev: { [k in keyof PokemonBaseStats]: number }, curr) => {
    prev[curr.stat.name] = curr.base_stat
    return prev
  }, {})