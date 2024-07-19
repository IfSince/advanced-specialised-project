import clsx from 'clsx'
import { ReactNode } from 'react'

export interface DescriptionListProps {
  key: string | ReactNode
  value: string | number | boolean | [] | ReactNode
}

const renderValue = (value: DescriptionListProps['value']) => {
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No'
  } else if (Array.isArray(value)) {
    return !!value.length ? (value as []).join(', ') : '-'
  } else {
    return !!value ? value : '-'
  }
}

export const DescriptionList = ({ data, className }: { data: DescriptionListProps[], className?: string }) =>
  <dl className={ clsx('text-white divide-y divide-gray-700', className) }>
    {
      data.map(({ key, value }, index) =>
        <div className={ clsx(
          'flex flex-col',
          index == 0 && 'pb-3',
          index > 0 && index < data.length - 1 && 'py-3',
          index > 0 && index == data.length - 1 && 'pt-3',
        ) }
             key={ index }>
          <dt className="mb-0 font-semibold capitalize">{ key }</dt>
          <dd className="text-gray-400">{ renderValue(value) }</dd>
        </div>,
      )
    }
  </dl>