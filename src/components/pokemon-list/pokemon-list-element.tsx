import { ReactNode } from 'react'
import Image from 'next/image'
import { PokemonListDetail } from '@/lib/models/pokemon-list-detail.model'
import { PokemonTypes } from '@/components/pokemon-types'
import Link from 'next/link'

export const PokemonListElement = ({ name, id, imageUrl, baseStats, types }: PokemonListDetail) => {
  return (
    <tr className="cursor-pointer border-b border-gray-600 transition-colors hover:bg-gray-700">
      <th scope="row" className="whitespace-nowrap font-medium text-white">
        <Link href={ `/pokemon/${ name }` } className="flex items-center px-4 py-2 capitalize">
          {
            imageUrl &&
            <Image src={ imageUrl }
                   width={ 32 }
                   height={ 32 }
                   alt="iMac Front Image"
                   className="mr-3 h-8 w-auto"/>
          }
          { name }
        </Link>
      </th>
      <RowEntry name={ name }>{ id }</RowEntry>
      <RowEntry name={ name }><PokemonTypes types={ types }/></RowEntry>
      <RowEntry name={ name }>{ baseStats.hp }</RowEntry>
      <RowEntry name={ name }>{ baseStats.attack }</RowEntry>
      <RowEntry name={ name }>{ baseStats.defense }</RowEntry>
      <RowEntry name={ name }>{ baseStats['special-attack'] }</RowEntry>
      <RowEntry name={ name }>{ baseStats['special-defense'] }</RowEntry>
      <RowEntry name={ name }>{ baseStats.speed }</RowEntry>
    </tr>
  )
}

const RowEntry = ({ name, children }: Readonly<{ name: string, children: ReactNode }>) =>
  <td>
    <Link href={ `/pokemon/${ name }` } className="block whitespace-nowrap px-4 py-2 font-medium text-white">
      { children }
    </Link>
  </td>