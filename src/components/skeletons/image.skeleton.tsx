import { ImageIcon } from '@/components/icons/image-icon'

export const ImageSkeleton = ({ className }: { className: string }) =>
  <div className={ `animate-pulse rounded-lg bg-gray-900 flex justify-center items-center ${ className }` }>
    <ImageIcon className="h-12 w-12 fill-gray-500"/>
  </div>