export const Skeleton = ({ className }: { className: HTMLDivElement['className'] }) => <div
  className={ `animate-pulse rounded-sm bg-gray-900 ${ className }` }/>