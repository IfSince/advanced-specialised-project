'use client'

import { ErrorPanel } from '@/components/error/error-panel'
import { ErrorPageProps } from '@/components/error/error-page'

export default function AbilitiesError(props: ErrorPageProps) {
  return (
      <ErrorPanel title="Abilities"
                  message="An error occurred while loading the abilities. Please try again later."
                  { ...props }/>
  )
}