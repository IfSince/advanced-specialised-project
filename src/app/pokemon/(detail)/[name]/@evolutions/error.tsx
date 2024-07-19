'use client'

import { Panel } from '@/components/layout/panel'
import { SubTitle } from '@/components/layout/sub-title'

export default function EvolutionsError() {
  return (
    <Panel>
      <SubTitle>Evolution Chain</SubTitle>
      <span>An error occurred while loading the evolution chain</span>
    </Panel>
  )
}