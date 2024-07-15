import { PokemonDetail } from '@/lib/models/pokemon-detail.model'

export const sortAndMapPokemonTypes = (types: PokemonDetail['types']) =>
  types
    .sort((a, b) => a.slot - b.slot)
    .map(({ type }) => type.name)