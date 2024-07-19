import { BASE_URL } from '@/lib/config'
import { Ability } from '@/lib/models/ability.model'

export const getPokemonAbilityByName = async (name: string): Promise<Ability> => {
  try {
    const response = await fetch(`${ BASE_URL }/ability/${ name }`)

    return response.json()
  } catch (error) {
    console.error(error)
    throw new Error(`Failed to load pokemon ability with name: ${ name }.`)
  }
}