'use client'

import { ErrorPanel } from '@/components/error/error-panel'
import { ErrorPageProps } from '@/components/error/error-page'

export default function MovesError(props: ErrorPageProps) {
  return (
    <ErrorPanel title="Moves"
                message="An error occurred while loading the moves. Please try again later."
                { ...props }/>
  )
}