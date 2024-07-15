import { PokemonListDetail } from '@/lib/models/pokemon-list-detail.model'
import clsx from 'clsx'

export const PokemonTypes = ({ types, className }: { types: PokemonListDetail['types'], className?: string }) => {
  const colors: Record<string, string> = {
    normal: '#A8A878',
    fighting: '#C03028',
    flying: '#A890F0',
    poison: '#A040A0',
    ground: '#E0C068',
    rock: '#B8A038',
    bug: '#A8B820',
    ghost: '#705898',
    steel: '#B8B8D0',
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    psychic: '#F85888',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    fairy: '#F0B6BC',
    unknown: 'bg-gray-200',
    shadow: 'bg-gray-200',
  }

  return (
    <div className={ clsx("flex flex-wrap gap-2 text-gray-300", className) }>
      {
        types.map(type =>
          <span className="rounded px-3 py-1 text-xs capitalize text-white"
                style={ { backgroundColor: colors[type] } }
                key={ type }>
            { type }
          </span>,
        )
      }
    </div>
  )
}