import { getPokemonDetailByName } from '@/lib/data/get-pokemon-detail-by-name'
import Image from 'next/image'
import { EvolutionDetail } from '@/lib/models/evolution-chain.model'
import Link from 'next/link'
import { formatName } from '@/lib/util/typography'
import { sortAndMapPokemonTypes } from '@/lib/util/mappers/sort-and-map-pokemon-types'
import { EvolutionDetails } from '@/components/pokemon-detail/evolution/evolution-details'
import { PokemonTypes } from '@/components/pokemon-types'

export const EvolutionCard = async ({ name, evolutionDetails }: { name: string, evolutionDetails: EvolutionDetail[] }) => {
  const { types, sprites: { front_default } } = await getPokemonDetailByName(name)

  return (
    <div className="flex grow basis-0 flex-col items-center">
      <EvolutionDetails details={ evolutionDetails }/>

      <Link className="flex w-44 grow basis-0 flex-col items-center rounded-lg border border-gray-600 transition-colors max-w-44
                       hover:text-white hover:bg-gray-700 focus-visible:bg-gray-700 focus-visible:text-white focus-visible:outline-none"
            href={ `/pokemon/${ name }` }>
        <Image src={ front_default }
               alt={ `Sprite of ${ name }` }
               width={ 175 }
               height={ 175 }/>
        <div className="px-4 pt-1 pb-4">
          <h3 className="mb-2 text-center text-2xl font-medium tracking-tight">{ formatName(name) }</h3>
          <PokemonTypes className="justify-center" types={ sortAndMapPokemonTypes(types) }/>
        </div>
      </Link>
    </div>
  )
}