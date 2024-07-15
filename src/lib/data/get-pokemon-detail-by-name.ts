import { PokemonDetail } from '@/lib/models/pokemon-detail.model'
import { BASE_URL } from '@/lib/config'

export const getPokemonDetailByName = async (name: string): Promise<PokemonDetail> => {
  try {
    const response = await fetch(`${ BASE_URL }/pokemon/${ name }`)

    return response.json()

  } catch (error) {
    console.error(error)
    throw new Error(`Failed to load pokemon detail for pokemon: ${ name }.`)
  }
}