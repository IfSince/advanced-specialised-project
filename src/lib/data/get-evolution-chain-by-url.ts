import { formatName } from '@/lib/util/typography'
import { EvolutionChain } from '@/lib/models/evolution-chain.model'

export const getEvolutionChainByUrl = async (url: string, name: string): Promise<EvolutionChain> => {
  try {
    const response = await fetch(url)

    // await new Promise(resolve => setTimeout(resolve, 5000))
    // throw new Error('test')

    return response.json()
  } catch (error) {
    console.error(error)
    throw new Error(`Failed to load evolution chain for pokemon ${ formatName(name) } and url ${ url }.`)
  }
}