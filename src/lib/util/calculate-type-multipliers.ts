import { PokemonType } from '@/lib/models/pokemon-type.model'
import { ApiLink } from '@/lib/models/api-link.model'
import { TypeMultiplier } from '@/lib/models/type-multiplier.model'

const mapName = (it: ApiLink) => it.name

const writeMultiplier = (
  multipliers: { defense: { [k: string]: number }, attack: { [k: string]: number } },
  multiplier: number,
  attribute: 'attack' | 'defense',
) => {
  return (type: string) => {
    if (Object.prototype.hasOwnProperty.call(multipliers[attribute], type)) {
      multipliers[attribute][type] = multipliers[attribute][type] * multiplier
    } else {
      multipliers[attribute][type] = multiplier
    }
  }
}

export const calculateTypeMultiplier = (types: PokemonType[]) => {
  let multipliers: { defense: { [k: string]: number }, attack: { [k: string]: number } } = {
    defense: {},
    attack: {},
  }

  types.forEach(({ name, damage_relations }) => {
    let no_damage_to = damage_relations.no_damage_to.map(mapName)
    let no_damage_from = damage_relations.no_damage_from.map(mapName)
    let half_damage_to = damage_relations.half_damage_to.map(mapName)
    let half_damage_from = damage_relations.half_damage_from.map(mapName)
    let double_damage_to = damage_relations.double_damage_to.map(mapName)
    let double_damage_from = damage_relations.double_damage_from.map(mapName)

    no_damage_to.forEach(writeMultiplier(multipliers, 0, 'attack'))
    no_damage_from.forEach(writeMultiplier(multipliers, 0, 'defense'))
    half_damage_to.forEach(writeMultiplier(multipliers, 0.5, 'attack'))
    half_damage_from.forEach(writeMultiplier(multipliers, 0.5, 'defense'))
    double_damage_to.forEach(writeMultiplier(multipliers, 2, 'attack'))
    double_damage_from.forEach(writeMultiplier(multipliers, 2, 'defense'))
  })

  //remove x1.0 and sort multipliers by name
  let multipliersObj: { defense: TypeMultiplier, attack: TypeMultiplier } = {
    defense: {
      no_damage: [],
      quarter_damage: [],
      half_damage: [],
      double_damage: [],
      quadruple_damage: [],
    },
    attack: {
      no_damage: [],
      quarter_damage: [],
      half_damage: [],
      double_damage: [],
      quadruple_damage: [],
    },
  }

  // attack
  for (const [key, value] of Object.entries(multipliers.attack)) {
    if (value === 0) multipliersObj.attack.no_damage.push(key)
    if (value === 0.25) multipliersObj.attack.quarter_damage.push(key)
    if (value === 0.5) multipliersObj.attack.half_damage.push(key)
    if (value === 2) multipliersObj.attack.double_damage.push(key)
    if (value === 4) multipliersObj.attack.quadruple_damage.push(key)
  }

  // defense
  for (const [key, value] of Object.entries(multipliers.defense)) {
    if (value === 0) multipliersObj.defense.no_damage.push(key)
    if (value === 0.25) multipliersObj.defense.quarter_damage.push(key)
    if (value === 0.5) multipliersObj.defense.half_damage.push(key)
    if (value === 2) multipliersObj.defense.double_damage.push(key)
    if (value === 4) multipliersObj.defense.quadruple_damage.push(key)
  }

  return multipliersObj
}