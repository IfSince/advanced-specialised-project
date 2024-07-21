import { Skeleton } from '@/components/skeletons/skeleton'
import { Row } from '@/components/layout/table/row'
import { Cell } from '@/components/layout/table/cell'

export const PokemonListEntrySkeleton = () =>
  <Row>
    <Cell className="flex items-center">
      <Skeleton className="mr-3 h-[34px] w-[34px]"/>
      <Skeleton className="h-5 w-40"/>
    </Cell>
    <Cell><Skeleton className="h-5 w-12"/></Cell>
    <Cell>
      <div className="flex justify-start gap-2">
        <Skeleton className="h-5 w-20"/>
        <Skeleton className="h-5 w-20"/>
      </div>
    </Cell>
    <Cell><Skeleton className="h-5 w-10"/></Cell>
    <Cell><Skeleton className="h-5 w-10"/></Cell>
    <Cell><Skeleton className="h-5 w-10"/></Cell>
    <Cell><Skeleton className="h-5 w-10"/></Cell>
    <Cell><Skeleton className="h-5 w-10"/></Cell>
    <Cell><Skeleton className="h-5 w-10"/></Cell>
  </Row>