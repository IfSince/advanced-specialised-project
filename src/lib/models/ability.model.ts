import { ApiLink } from '@/lib/models/api-link.model'

export interface Ability {
  id: number
  name: string
  effect_entries: {
    effect: string
    language: ApiLink
  }[]
  flavor_text_entries: {
    flavor_text: string
    language: ApiLink
    version_group: ApiLink
  }[]
}