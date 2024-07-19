'use client'

import { useState } from 'react'
import { Button } from '@/components/layout/buttons/button'
import { ArrowLeft } from '@/components/icons/arrow-left'
import { ArrowRight } from '@/components/icons/arrow-right'
import { SubTitle } from '@/components/layout/sub-title'
import Image from 'next/image'
import { PokemonDetail } from '@/lib/models/pokemon-detail.model'

const renderSprite = (type: 'frontDefault' | 'frontShiny' | 'backDefault' | 'backShiny', sprite?: string) => {
  const alt: Record<typeof type, string> = {
    frontDefault: 'Front default sprite',
    frontShiny: 'Front shiny sprite',
    backDefault: 'Back default sprite',
    backShiny: 'Back shiny sprite',
  }

  return sprite
    ? <Image src={ sprite } alt={ alt[type] } width={ 350 } height={ 350 }/>
    : <div className="flex items-center justify-center rounded-lg border-2 border-gray-500 w-[350px] h-[350px]">No { alt[type].toLowerCase() } found.</div>
}

export const Sprites = ({ sprites }: { sprites: PokemonDetail['sprites'] }) => {
  const [front, setFront] = useState(true)
  const updateFront = () => setFront(curr => !curr)

  const FrontSprites = () =>
    <>
      { renderSprite('frontDefault', sprites.front_default) }
      { renderSprite('frontShiny', sprites.front_shiny) }
    </>

  const BackSprites = () =>
    <>
      { renderSprite('backDefault', sprites.back_default) }
      { renderSprite('backShiny', sprites.back_shiny) }
    </>

  return (
    <>
      <SubTitle>
        <div className="flex flex-row items-end justify-between gap-4">
          <span>Sprites</span>
          <div className="flex gap-2">
            <Button icon={ <ArrowLeft className="h-6 w-6"/> }
                    size="lg"
                    click={ () => updateFront() }
                    disabled={ sprites?.back_default === null || sprites?.back_shiny === null }/>
            <Button icon={ <ArrowRight className="h-6 w-6"/> }
                    size="lg"
                    click={ () => updateFront() }
                    disabled={ sprites?.back_default === null || sprites?.back_shiny === null }/>
          </div>
        </div>
      </SubTitle>
      <div className="flex flex-col items-center justify-evenly gap-x-10 gap-y-4 sm:flex-row">
        { front ? <FrontSprites/> : <BackSprites/> }
      </div>
    </>
  )
}