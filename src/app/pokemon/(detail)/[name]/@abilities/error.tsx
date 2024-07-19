'use client'

import { Panel } from '@/components/layout/panel'
import { SubTitle } from '@/components/layout/sub-title'

export default function AbilitiesError() {
  return (
    <Panel>
      <SubTitle>Abilities</SubTitle>
      <span>An error occurred while loading the abilities</span>
    </Panel>
  )
}