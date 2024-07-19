import { Panel } from '@/components/layout/panel'
import { Table } from '@/components/layout/table/table'
import { RowSkeleton } from '@/components/skeletons/table/row.skeleton'
import { Cell } from '@/components/layout/table/cell'
import { Skeleton } from '@/components/skeletons/skeleton'
import { Row } from '@/components/layout/table/row'
import { SubTitle } from '@/components/layout/sub-title'

export default function MovesLoading() {
  return (
    <Panel>
      <SubTitle>Moves</SubTitle>
      <Table columns={ ['Level', 'Method', 'Name', 'Description', 'Damage Class', 'Damage Type', 'Power Points', 'Power', 'Accuracy', 'Generation'] }>
        <RowSkeleton count={ 10 } element={
          <Row>
            <Cell><Skeleton className="h-5 w-10"/></Cell>
            <Cell><Skeleton className="h-5 w-20"/></Cell>
            <Cell><Skeleton className="h-5 w-32"/></Cell>
            <Cell><Skeleton className="h-5 w-52"/></Cell>
            <Cell><Skeleton className="h-5 w-20"/></Cell>
            <Cell><Skeleton className="h-5 w-20"/></Cell>
            <Cell><Skeleton className="h-5 w-10"/></Cell>
            <Cell><Skeleton className="h-5 w-10"/></Cell>
            <Cell><Skeleton className="h-5 w-10"/></Cell>
            <Cell><Skeleton className="h-5 w-32"/></Cell>
          </Row>
        }/>
      </Table>
    </Panel>
  )
}