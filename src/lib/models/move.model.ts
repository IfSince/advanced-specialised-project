import { ApiLink } from '@/lib/models/api-link.model'

export interface Move {
  id: number
  name: string
  names: { language: ApiLink, name: string }[]
  accuracy: number
  power: number
  priority: number
  pp: number
  generation: ApiLink
  damage_class: ApiLink
  type: ApiLink
  effect_entries: {
    effect: string
    language: ApiLink
    short_effect: string
  }[]

  flavor_text_entries: {
    flavor_text: string
    language: ApiLink
    version_group: ApiLink
  }[]

}