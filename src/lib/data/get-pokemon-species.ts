import { PokemonSpecies } from '@/lib/models/pokemon-species.model'
import { BASE_URL } from '@/lib/config'

export const getPokemonSpeciesByName = async (name: string): Promise<PokemonSpecies> => {
  try {
    const response = await fetch(`${ BASE_URL }/pokemon-species/${ name }`)

    return response.json()
  } catch (error) {
    console.error(error)
    throw new Error(`Failed to load pokemon species data for pokemon: ${ name }.`)
  }
}