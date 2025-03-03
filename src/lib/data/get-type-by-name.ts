import { BASE_URL } from '@/lib/config'
import { PokemonType } from '@/lib/models/pokemon-type.model'

export const getTypeByName = async (name: string): Promise<PokemonType> => {
  try {
    const response = await fetch(`${ BASE_URL }/type/${ name }`)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json()
  } catch (error) {
    console.error(error)
    throw new Error(`Failed to load type with name: ${ name }.`)
  }
}