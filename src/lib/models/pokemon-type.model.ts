import { ApiLink } from '@/lib/models/api-link.model'

export interface PokemonType {
  id: number
  name: string
  damage_relations: {
    no_damage_to: ApiLink[]
    half_damage_to: ApiLink[]
    double_damage_to: ApiLink[]
    no_damage_from: ApiLink[]
    half_damage_from: ApiLink[]
    double_damage_from: ApiLink[]
  }
}