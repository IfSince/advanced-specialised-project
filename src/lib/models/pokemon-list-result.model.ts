export interface PokemonListResult {
  count: number
  next: string
  previous: string
  results: { name: string, url: string }[]
}