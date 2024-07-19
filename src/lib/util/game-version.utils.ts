import { GAME_VERSIONS } from '@/lib/models/game-versions'
import { GENERATIONS } from '@/lib/models/generations'
import { Game } from '@/lib/models/game.model'

export const checkIfArceus = (pokemonId: number): boolean => pokemonId > 898 && pokemonId <= 905

export const mapVersionToGroup = (currentVersion: string): Game['group'] =>
  GAME_VERSIONS.filter(version => version.value === currentVersion).map(version => version.group)[0]

export const mapGeneration = (generationValue: string): string | undefined =>
  generationValue ? GENERATIONS.find(gen => gen.value === generationValue)?.label : ''

export const mapGenerationToGame = (value: string, pokemonId: number): Game['value'] => {
  const genGames = GAME_VERSIONS.filter(gen => gen.genValue === value)
  return checkIfArceus(pokemonId) ? genGames[2].value : genGames[0].value
}

export const checkIfEarlierGen = (newGen: string, currGen: string): boolean => {
  const versionValues = GAME_VERSIONS.map(version => version.value)
  return versionValues.indexOf(newGen) > versionValues.indexOf(currGen)
}