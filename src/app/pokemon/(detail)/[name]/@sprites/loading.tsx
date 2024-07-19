import { Panel } from '@/components/layout/panel'
import { SubTitle } from '@/components/layout/sub-title'
import { Button } from '@/components/layout/buttons/button'
import { ArrowLeft } from '@/components/icons/arrow-left'
import { ArrowRight } from '@/components/icons/arrow-right'
import { ImageSkeleton } from '@/components/skeletons/image.skeleton'

export default function SpritesLoading() {
  return (
    <Panel className="xl:col-span-2">
      <SubTitle>
        <div className="flex flex-row items-end justify-between gap-4">
          <span>Sprites</span>
          <div className="flex gap-2">
            <Button icon={ <ArrowLeft className="h-6 w-6"/> } size="lg"/>
            <Button icon={ <ArrowRight className="h-6 w-6"/> } size="lg"/>
          </div>
        </div>
      </SubTitle>

      <div className="flex flex-col items-center justify-evenly gap-x-10 gap-y-4 sm:flex-row">
        <ImageSkeleton className="aspect-square w-full max-w-[350px]"/>
        <ImageSkeleton className="aspect-square w-full max-w-[350px]"/>
      </div>
    </Panel>
  )
}