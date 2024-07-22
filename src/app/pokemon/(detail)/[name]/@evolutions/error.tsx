'use client'

import { ErrorPanel } from '@/components/error/error-panel'
import { ErrorPageProps } from '@/components/error/error-page'

export default function EvolutionsError(props: ErrorPageProps) {
  return (
    <ErrorPanel title="Evolution Chain"
                message="An error occurred while loading the evolution chain. Please try again later."
                { ...props }/>
  )
}