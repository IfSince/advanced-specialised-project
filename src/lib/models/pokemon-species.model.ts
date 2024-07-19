import { ApiLink } from '@/lib/models/api-link.model'

export interface PokemonSpecies {
  id: number
  base_happiness: number
  capture_rate: number
  color: ApiLink
  egg_groups: ApiLink[]
  evolution_chain: {
    url: string
  }
  evolves_from_species: ApiLink
  flavor_text_entries: {
    flavor_text: string
    language: ApiLink
    version: ApiLink
  }[]
  gender_rate: number
  genera: {
    genus: string
    language: ApiLink
  }[]
  generation: ApiLink
  growth_rate: ApiLink
  habitat?: ApiLink
  hatch_counter?: number
  is_baby: boolean,
  is_legendary: boolean,
  is_mythical: boolean,
}