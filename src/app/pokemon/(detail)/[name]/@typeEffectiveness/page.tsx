import { getPokemonDetailByName } from '@/lib/data/get-pokemon-detail-by-name'
import { getTypeByName } from '@/lib/data/get-type-by-name'
import { Panel } from '@/components/layout/panel'
import { SubTitle } from '@/components/layout/sub-title'
import { DescriptionList } from '@/components/layout/description-list'
import { formatName } from '@/lib/util/typography'
import { calculateTypeMultiplier } from '@/lib/util/calculate-type-multipliers'

export default async function Page({ params: { name } }: { params: { name: string } }) {
  const data = await getPokemonDetailByName(name)
  const types = await Promise.all(data.types.map(it => getTypeByName(it.type.name)))

  const { attack, defense } = calculateTypeMultiplier(types)

  return (
    <Panel>
      <SubTitle>Type Effectiveness</SubTitle>
      <div className="grid sm:grid-cols-2 gap-x-14 gap-y-12">
        <DescriptionList data={ [
          { key: 'No damage from', value: defense.no_damage.map(formatName) },
          { key: 'Quarter damage from', value: defense.quarter_damage.map(formatName) },
          { key: 'Half damage from', value: defense.half_damage.map(formatName) },
          { key: 'Double damage from', value: defense.double_damage.map(formatName) },
          { key: 'Quadruple damage from', value: defense.quadruple_damage.map(formatName) },
        ] }/>

        <DescriptionList data={ [
          { key: 'No damage to', value: attack.no_damage.map(formatName) },
          { key: 'Quarter damage to', value: attack.quarter_damage.map(formatName) },
          { key: 'Half damage to', value: attack.half_damage.map(formatName) },
          { key: 'Double damage to', value: attack.double_damage.map(formatName) },
          { key: 'Quadruple damage to', value: attack.quadruple_damage.map(formatName) },
        ] }/>
      </div>
    </Panel>
  )
}