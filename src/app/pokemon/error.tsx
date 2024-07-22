'use client'

import { ErrorPage, ErrorPageProps } from '@/components/error/error-page'

export default function Error(props: ErrorPageProps) {
  return <ErrorPage { ...props }/>
}