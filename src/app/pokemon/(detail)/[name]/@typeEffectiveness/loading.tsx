import { Panel } from '@/components/layout/panel'
import { SubTitle } from '@/components/layout/sub-title'
import { DescriptionListSkeleton } from '@/components/skeletons/description-list.skeleton'

export default function TypeEffectivenessLoading() {
  return (
    <Panel>
      <SubTitle>Type Effectiveness</SubTitle>
      <div className="grid gap-x-14 gap-y-12 sm:grid-cols-2">
        <DescriptionListSkeleton entries={ ['single', 'single', 'single', 'single', 'single'] }/>
        <DescriptionListSkeleton entries={ ['single', 'single', 'single', 'single', 'single'] }/>
      </div>
    </Panel>
  )
}