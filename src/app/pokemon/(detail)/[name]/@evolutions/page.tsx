import { getEvolutionChainByUrl } from '@/lib/data/get-evolution-chain-by-url'
import { getPokemonSpeciesByName } from '@/lib/data/get-pokemon-species'
import { getPokemonDetailByName } from '@/lib/data/get-pokemon-detail-by-name'
import { ChainLink, EvolutionDetail } from '@/lib/models/evolution-chain.model'
import { Panel } from '@/components/layout/panel'
import { SubTitle } from '@/components/layout/sub-title'
import { EvolutionCard } from '@/components/pokemon-detail/evolution/evolution-card'

export default async function EvolutionPanelPage({ params: { name } }: { params: { name: string } }) {
  const detail = await getPokemonDetailByName(name)
  const { evolution_chain } = await getPokemonSpeciesByName(detail.species.name)
  const evolutionChain = await getEvolutionChainByUrl(evolution_chain.url, name)

  const getEvolutionChainArray = (chain: ChainLink, level: number = 0, result: { name: string, evolutionDetails: EvolutionDetail[] }[][] = []) => {
    if (!result[level]) result[level] = []

    result[level].push({ name: chain.species.name, evolutionDetails: chain.evolution_details })
    chain.evolves_to.forEach(evolution => getEvolutionChainArray(evolution, level + 1, result))

    return result
  }

  const evolutionChainArray = getEvolutionChainArray(evolutionChain.chain)

  return (
    <Panel>
      <SubTitle>Evolution Chain</SubTitle>
      <div className="flex flex-col items-center justify-between gap-6 overflow-x-auto pb-6">
        {
          evolutionChainArray.length > 1
            ? evolutionChainArray.map((entries, levelIndex) =>
              <div className="flex gap-x-8" key={ levelIndex }>
                {
                  entries?.map((entry, index) =>
                    <EvolutionCard key={ `${ entry.name }${ index }` }
                                   name={ name }
                                   entry={ entry }/>,
                  )
                }
              </div>)
            : <span className="flex w-full justify-center pt-10 pb-2 text-gray-400">This pokemon does not evolve.</span>
        }
      </div>
    </Panel>
  )
}