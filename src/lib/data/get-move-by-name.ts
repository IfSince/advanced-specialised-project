import { Move } from '@/lib/models/move.model'
import { BASE_URL } from '@/lib/config'

export const getMoveByName = async (name: string): Promise<Move> => {
  try {
    const response = await fetch(`${ BASE_URL }/move/${ name }`)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json()
  } catch (error) {
    console.error(error)
    throw new Error(`Failed to load move with name: ${ name }.`)
  }
}

// export const getMoveByUrl = async (url: string): Promise<Move> => {
//   try {
//     const response = await fetch(url)
//
//     return response.json()
//   } catch (error) {
//     console.error(error)
//     throw new Error(`Failed to load move by url: ${ url }.`)
//   }
// }