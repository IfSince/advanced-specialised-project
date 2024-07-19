import { ApiLink } from '@/lib/models/api-link.model'
import Image from 'next/image'

export type ExternalIconTypes = 'tradeSpecies' | 'evoItem'

const getIdFromSpeciesUrl = (url: string): number => {
  const matchId = url.match(/\/pokemon-species\/(\d+)\//)
  return Number(matchId?.[1])
}

export const ExternalIcon = ({ name, url, type }: { type: ExternalIconTypes } & ApiLink) => {
  const imageUrls: Record<ExternalIconTypes, string> = {
    tradeSpecies: `https://raw.githubusercontent.com/andreferreiradlw/pokestats_media/main/assets/images/${ getIdFromSpeciesUrl(url) }.png`,
    evoItem: `https://raw.githubusercontent.com/msikma/pokesprite/master/items/evo-item/${ name }.png`,
  }

  return (
    <Image width={ 32 }
           height={ 32 }
           alt={ name }
           src={ imageUrls[type] }/>
  )
}