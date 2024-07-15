import { Fragment, ReactElement } from 'react'

export const RowSkeleton = ({ count, element }: { count: number, element: ReactElement }) =>
  Array(count).fill(null).map((_, index) => <Fragment key={ index }>{ element }</Fragment>)