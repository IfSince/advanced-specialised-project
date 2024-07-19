import { SubTitle } from '@/components/layout/sub-title'
import { DescriptionListSkeleton } from '@/components/skeletons/description-list.skeleton'
import { Panel } from '@/components/layout/panel'

export default function BaseInformationLoading() {
  return (
    <Panel>
      <SubTitle>Basic Information</SubTitle>
      <div className="grid gap-x-14 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
        <DescriptionListSkeleton entries={ ['single', 'single', 'double', 'single'] }/>
        <DescriptionListSkeleton entries={ ['single', 'single', 'single', 'single'] }/>
        <DescriptionListSkeleton entries={ ['single', 'single', 'single', 'single'] }/>
      </div>
    </Panel>
  )
}