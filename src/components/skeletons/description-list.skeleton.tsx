
import { Skeleton } from '@/components/skeletons/skeleton'
import { ReactNode } from 'react'
import { DescriptionList } from '@/components/layout/description-list'

type Lines = 'single' | 'double' | 'multi'

export const DescriptionListSkeleton = ({ entries }: { entries: Lines[] }) => {
  const mappedValues: Record<Lines, ReactNode> = {
    'single': <Skeleton className="h-4 w-32"/>,
    'double': (
      <div className="mt-1 flex flex-col gap-1.5">
        <Skeleton className="h-4 w-5/6"/>
        <Skeleton className="h-4 w-5/6"/>
      </div>
    ),
    'multi': (
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-5/6"/>
        <Skeleton className="h-4 w-5/6"/>
        <Skeleton className="h-4 w-2/3"/>
      </div>
    ),
  }

  return (
    <DescriptionList data={ entries.map(entry => ({
      key: <Skeleton className="mb-2 h-5 w-36"/>,
      value: mappedValues[entry],
    })) }/>
  )
}