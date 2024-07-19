import { Panel } from '@/components/layout/panel'
import { getPokemonDetailByName } from '@/lib/data/get-pokemon-detail-by-name'
import { SubTitle } from '@/components/layout/sub-title'
import { Cell } from '@/components/layout/table/cell'
import { Table } from '@/components/layout/table/table'
import { Fragment } from 'react'
import { Row } from '@/components/layout/table/row'
import { formatName } from '@/lib/util/typography'
import { PokemonBaseStats } from '@/lib/models/pokemon-base-stats.model'

// calculate stats
const calculate = (
  statType: 'min' | 'max',
  baseStat: number,
  statName: keyof PokemonBaseStats,
) => {
  const EV = statType === 'min' ? 0 : 252
  const IV = statType === 'min' ? 0 : 31
  const level = 100
  const nature = statType === 'min' ? 0.9 : 1.1

  // https://bulbapedia.bulbagarden.net/wiki/Statistic
  if (statName === 'hp') {
    return Math.floor(((2 * baseStat + IV + EV / 4) * level) / 100 + level + 10)
  } else {
    return Math.floor(Math.floor(((2 * baseStat + IV + EV / 4) * level) / 100 + 5) * nature)
  }
}

const percentage = (statValue: number) => {
  const percentage = (100 / 180) * statValue
  return percentage > 100 ? 100 : percentage
}

export default async function StatsPanelPage({ params: { name } }: { params: { name: string } }) {
  const { stats } = await getPokemonDetailByName(name)

  return (
    <Panel>
      <SubTitle>Base Stats</SubTitle>
      <Table columns={ ['Name', 'Base', 'Percentage', 'Min', 'Max'] }>
        {
          stats.map(({ stat: { name }, base_stat }) =>
            <Fragment key={ name }>
              <Row>
                <Cell role="header">{ formatName(name) }</Cell>
                <Cell>{ base_stat }</Cell>
                <Cell>
                  <div className="h-2 w-full rounded-full bg-gray-700">
                    <div className="h-2 rounded-full bg-white" style={ { width: `${ percentage(base_stat) }%` } }/>
                  </div>
                </Cell>
                <Cell>{ calculate('min', base_stat, name) }</Cell>
                <Cell>{ calculate('max', base_stat, name) }</Cell>
              </Row>

            </Fragment>,
          )
        }
        <Row>
          <Cell className="border-t-2 border-t-gray-400 font-bold">Total</Cell>
          <Cell className="border-t-2 border-t-gray-400 font-bold">
            {
              stats.map(({ base_stat }) => base_stat).reduce((a, b) => a + b, 0)
            }
          </Cell>
          <Cell className="border-t-2 border-t-gray-400 font-bold"/>
          <Cell className="border-t-2 border-t-gray-400 font-bold"/>
          <Cell className="border-t-2 border-t-gray-400 font-bold"/>
        </Row>
      </Table>
    </Panel>
  )
}