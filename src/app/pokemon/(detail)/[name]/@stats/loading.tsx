import { Panel } from '@/components/layout/panel'
import { SubTitle } from '@/components/layout/sub-title'
import { Table } from '@/components/layout/table/table'
import { Row } from '@/components/layout/table/row'
import { Cell } from '@/components/layout/table/cell'
import { Skeleton } from '@/components/skeletons/skeleton'

export default function StatsLoading() {
  return (
    <Panel>
      <SubTitle>Base Stats</SubTitle>
      <Table columns={ ['Name', 'Base', 'Percentage', 'Min', 'Max'] }>
        <Row>
          <Cell><Skeleton className="h-5 w-12"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
          <Cell><Skeleton className="h-5 w-40"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
        </Row>
        <Row>
          <Cell><Skeleton className="h-5 w-12"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
          <Cell><Skeleton className="h-5 w-40"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
        </Row>
        <Row>
          <Cell><Skeleton className="h-5 w-12"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
          <Cell><Skeleton className="h-5 w-40"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
        </Row>
        <Row>
          <Cell><Skeleton className="h-5 w-12"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
          <Cell><Skeleton className="h-5 w-40"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
        </Row>
        <Row>
          <Cell><Skeleton className="h-5 w-12"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
          <Cell><Skeleton className="h-5 w-40"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
        </Row>
        <Row>
          <Cell><Skeleton className="h-5 w-12"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
          <Cell><Skeleton className="h-5 w-40"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
          <Cell><Skeleton className="h-5 w-10"/></Cell>
        </Row>

        <Row>
          <Cell className="border-t-2 border-t-gray-400 font-bold">
            <Skeleton className="h-5 w-12"/>
          </Cell>
          <Cell className="border-t-2 border-t-gray-400 font-bold">
            <Skeleton className="h-5 w-10"/>
          </Cell>
          <Cell className="border-t-2 border-t-gray-400 font-bold"/>
          <Cell className="border-t-2 border-t-gray-400 font-bold"/>
          <Cell className="border-t-2 border-t-gray-400 font-bold"/>
        </Row>
      </Table>
    </Panel>
  )
}