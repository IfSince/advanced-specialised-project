'use client'

import { Panel } from '@/components/layout/panel'
import { SubTitle } from '@/components/layout/sub-title'

export default function MovesError() {
  return (
    <Panel>
      <SubTitle>Moves</SubTitle>
      <span>An error occurred while loading the moves</span>
    </Panel>
  )
}