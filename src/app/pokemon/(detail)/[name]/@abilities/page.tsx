import { getPokemonDetailByName } from '@/lib/data/get-pokemon-detail-by-name'
import { getPokemonAbilityByName } from '@/lib/data/get-pokemon-ability-by-name'
import { Panel } from '@/components/layout/panel'
import { SubTitle } from '@/components/layout/sub-title'
import { DescriptionList } from '@/components/layout/description-list'

export default async function AbilitiesPanelPage({ params: { name } }: { params: { name: string } }) {
  const { abilities: abilityApiLinks } = await getPokemonDetailByName(name)
  const abilities = await Promise.all(abilityApiLinks.map(({ ability: { name } }) => getPokemonAbilityByName(name)))

  const abilitiesAsKeyValue = abilities.map(ability => ({
    key: `${ ability.name } ${ abilityApiLinks.find(it => it.ability.name === ability.name)?.is_hidden ? '(Hidden)' : '' }`,
    value: ability.effect_entries.find(entry => entry.language.name === 'en')?.effect ?? 'No description found',
  }))

  return (
    <Panel>
      <SubTitle>Abilities</SubTitle>
      <DescriptionList data={ abilitiesAsKeyValue }/>
    </Panel>
  )

}