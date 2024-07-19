import { Panel } from '@/components/layout/panel'
import { SubTitle } from '@/components/layout/sub-title'
import { DescriptionListSkeleton } from '@/components/skeletons/description-list.skeleton'

export default function AbilitiesLoading() {
  return (
    <Panel>
      <SubTitle>Abilities</SubTitle>
      <DescriptionListSkeleton entries={ ['multi', 'multi'] }/>
    </Panel>
  )
}