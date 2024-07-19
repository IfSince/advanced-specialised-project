import { getPokemonDetailByName } from '@/lib/data/get-pokemon-detail-by-name'
import { getPokemonSpeciesByName } from '@/lib/data/get-pokemon-species'
import { Panel } from '@/components/layout/panel'
import { SubTitle } from '@/components/layout/sub-title'
import { PokemonSpecies } from '@/lib/models/pokemon-species.model'
import { formatFlavorText, formatName } from '@/lib/util/typography'
import { DescriptionList } from '@/components/layout/description-list'
import { mapGeneration } from '@/lib/util/game-version.utils'
import { Male } from '@/components/icons/male'
import { Female } from '@/components/icons/female'

export default async function BaseInformationPanelPage({ params: { name } }: { params: { name: string } }) {
  const detail = await getPokemonDetailByName(name)
  const species = await getPokemonSpeciesByName(detail.species.name)

  const getCategory = (species: PokemonSpecies) => species.genera.find(it => it.language.name === 'en')?.genus
  const getDescription = (species: PokemonSpecies) => {
    // const result = species.flavor_text_entries.find(it => it.language.name === 'en' && it.version.name === gameVersion)
    const result = species.flavor_text_entries.find(it => it.language.name === 'en')
    return result && formatFlavorText(result.flavor_text)
  }

  const getGenderDistribution = (genderRate: number | null) =>
    genderRate === -1 || genderRate === null
      ? 'Genderless'
      : <p className="flex whitespace-nowrap">
        <Male className="inline h-6 w-6 fill-gray-400 mr-0.5"/>
        { `${ 12.5 * (8 - genderRate) }%` }
        <Female className="ml-3 inline h-6 w-6 fill-gray-400 mr-0.5"/>
        { `${ 12.5 * genderRate }%` }
      </p>

  return (
    <Panel>
      <SubTitle>Basic Information</SubTitle>
      <div className="grid gap-x-14 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
        <DescriptionList className="sm:col-span-2 xl:col-span-1"
                         data={ [
                           { key: 'Pokédex Nr.', value: `#${ detail.id }` },
                           { key: 'Category', value: getCategory(species) },
                           { key: 'Description', value: getDescription(species) },
                           { key: 'Introduced in', value: mapGeneration(species.generation.name) },
                         ] }/>

        <DescriptionList data={ [
          { key: 'Habitat', value: formatName(species.habitat?.name) },
          { key: 'Height', value: `${ +(detail.height * 0.1).toFixed(2) } m` },
          { key: 'Weight', value: `${ +(detail.weight * 0.01).toFixed(2) } kg` },
          { key: 'Color', value: formatName(species.color?.name) },
        ] }/>

        <DescriptionList data={ [
          { key: 'Gender Distribution', value: getGenderDistribution(species.gender_rate) },
          { key: 'Growth Rate', value: formatName(species.growth_rate.name) },
          { key: 'Egg Groups', value: !!species.egg_groups && species.egg_groups.length > 0 && species.egg_groups.map(it => formatName(it.name)).join(', ') },
          { key: 'Egg Cycles', value: species.hatch_counter ? `${ species.hatch_counter } cycles (${ 255 * (species.hatch_counter + 1) } steps)` : null },
        ] }/>
      </div>

    </Panel>
  )
}