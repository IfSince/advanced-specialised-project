'use client'

import { useState } from 'react'
import { SubTitle } from '@/components/layout/sub-title'
import Image from 'next/image'
import { PokemonDetail } from '@/lib/models/pokemon-detail.model'
import { ImageIcon } from '@/components/icons/image-icon'
import { Tabs } from '@/components/layout/tabs'

const renderSprite = (type: 'frontDefault' | 'frontShiny' | 'backDefault' | 'backShiny', sprite?: string) => {
  const alt: Record<typeof type, string> = {
    frontDefault: 'Front default sprite',
    frontShiny: 'Front shiny sprite',
    backDefault: 'Back default sprite',
    backShiny: 'Back shiny sprite',
  }

  return sprite
    ? <Image src={ sprite } alt={ alt[type] } width={ 350 } height={ 350 }/>
    : <div className="flex flex-col items-center justify-center gap-6 rounded-lg text-gray-500 w-[350px] h-[350px]">
      <ImageIcon className="h-24 w-24 fill-gray-500"/>
      No { alt[type].toLowerCase() } found.
    </div>
}

export const Sprites = ({ sprites }: { sprites: PokemonDetail['sprites'] }) => {
  const [toggle, setToggle] = useState('default')

  const tabConfig = [
    { label: 'Default', value: 'default' },
    { label: 'Shiny', value: 'shiny' },
  ]

  return (
    <>
      <SubTitle className="pt-0">
        <div className="flex flex-row items-end justify-between gap-4">
          <span>Sprites</span>
          <Tabs value={ toggle } setValue={ setToggle } config={ tabConfig }/>
        </div>
      </SubTitle>
      <div className="flex flex-col items-center justify-evenly gap-x-10 gap-y-4 sm:flex-row">
        {
          toggle === 'default' &&
          <>
            { renderSprite('frontDefault', sprites.front_default) }
            { renderSprite('backDefault', sprites.back_default) }
          </>
        }
        {
          toggle === 'shiny' &&
          <>
            { renderSprite('frontShiny', sprites.front_shiny) }
            { renderSprite('backShiny', sprites.back_shiny) }
          </>
        }
      </div>
    </>
  )
}