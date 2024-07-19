import { getPokemonDetailByName } from '@/lib/data/get-pokemon-detail-by-name'
import { Panel } from '@/components/layout/panel'
import { Sprites } from '@/components/pokemon-detail/sprites'

export default async function SpritesPanelPage({ params: { name } }: { params: { name: string } }) {
  const { sprites } = await getPokemonDetailByName(name)

  return (
      <Panel className="xl:col-span-2">
        <Sprites sprites={sprites}/>
      </Panel>
  )
}