import clsx from 'clsx'

export interface TabProps<T> {
  value: T
  setValue: (value: T) => void
  config: { label: string, value: T }[]
}

export const Tabs = <T, >({ value, setValue, config }: TabProps<T>) => {
  const sharedClassNames =
    `border-gray-600 transition-colors font-medium
     hover:text-white hover:bg-gray-700
     focus-visible:border focus-visible:bg-gray-700 focus-visible:text-white focus-visible:outline-none
     disabled:text-gray-600 disabled:border-gray-700 disabled:hover:text-gray-600 disabled:hover:bg-gray-800
     border-t border-b first:border first:rounded-s-lg last:border last:rounded-e-lg`

  return (
    <ul className="flex rounded-lg text-center text-base font-medium text-gray-500 first">
      {
        config.map(entry =>
          <li key={ entry.label }
              className={ clsx(sharedClassNames, value == entry.value ? 'bg-gray-700 text-white' : 'text-gray-200 bg-gray-800') }>
            <button className="px-5 py-2" onClick={ () => setValue(entry.value) }>{ entry.label }</button>
          </li>,
        )
      }
    </ul>
  )
}