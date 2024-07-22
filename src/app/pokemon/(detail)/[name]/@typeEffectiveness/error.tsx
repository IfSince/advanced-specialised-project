'use client'

import { ErrorPanel } from '@/components/error/error-panel'
import { ErrorPageProps } from '@/components/error/error-page'

export default function TypeEffectivenessError(props: ErrorPageProps) {
  return (
    <ErrorPanel title="Type Effectiveness"
                message="An error occurred while loading the types. Please try again later."
                { ...props }/>
  )
}