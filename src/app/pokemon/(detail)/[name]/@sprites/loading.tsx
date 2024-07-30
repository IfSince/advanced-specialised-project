import { Panel } from '@/components/layout/panel'
import { SubTitle } from '@/components/layout/sub-title'
import { ImageSkeleton } from '@/components/skeletons/image.skeleton'

export default function SpritesLoading() {
  return (
    <Panel className="xl:col-span-2">
      <SubTitle>
        <div className="flex flex-row items-end justify-between gap-4">
          <span>Sprites</span>
        </div>
      </SubTitle>

      <div className="flex flex-col items-center justify-evenly gap-x-10 gap-y-4 sm:flex-row">
        <ImageSkeleton className="aspect-square w-full max-w-[350px]"/>
        <ImageSkeleton className="aspect-square w-full max-w-[350px]"/>
      </div>
    </Panel>
  )
}