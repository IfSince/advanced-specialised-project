'use client'

import { ErrorPage, ErrorPageProps } from '@/components/error/error-page'

export default function PokemonDetailError(props: ErrorPageProps) {
  return <ErrorPage { ...props }/>
}