import { PokemonListResult } from '@/lib/models/pokemon-list-result.model'
import { BASE_URL } from '@/lib/config'

export const getPokemonList = async (limit: number = 10000, offset: number = 0): Promise<PokemonListResult> => {
  try {
    const response = await fetch(`${ BASE_URL }/pokemon/?limit=${ limit }&offset=${ offset }`)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json()
  } catch (error) {
    console.error(error)
    throw new Error(`Failed to load pokemon list entries with limit ${ limit } and offset ${ offset }.`)
  }
}