import { Title } from '@/components/layout/title'
import { Skeleton } from '@/components/skeletons/skeleton'
import AbilitiesLoading from '@/app/pokemon/(detail)/[name]/@abilities/loading'
import BaseInformationLoading from '@/app/pokemon/(detail)/[name]/@baseInformation/loading'
import SpritesLoading from '@/app/pokemon/(detail)/[name]/@sprites/loading'
import StatsLoading from '@/app/pokemon/(detail)/[name]/@stats/loading'
import TypeEffectivenessLoading from '@/app/pokemon/(detail)/[name]/@typeEffectiveness/loading'
import MovesLoading from '@/app/pokemon/(detail)/[name]/@moves/loading'
import EvolutionsLoading from '@/app/pokemon/(detail)/[name]/@evolutions/loading'

export default function Loading() {
  return (
    <>
      <Title>
          <span className="flex justify-between">
            <span className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Skeleton className="h-6 w-48"/>
            </span>
          </span>
      </Title>

      <BaseInformationLoading/>

      <div className="grid gap-x-4 lg:grid-cols-2 xl:grid-cols-3">
        <SpritesLoading/>
        <AbilitiesLoading/>
      </div>

      <div className="grid grid-cols-1 gap-x-4 xl:grid-cols-2">
        <StatsLoading/>

        <TypeEffectivenessLoading/>
      </div>

      <MovesLoading/>
      <EvolutionsLoading/>
    </>
  )
}