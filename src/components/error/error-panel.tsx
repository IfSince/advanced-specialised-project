import { ErrorPageProps } from '@/components/error/error-page'
import { Panel } from '@/components/layout/panel'
import { SubTitle } from '@/components/layout/sub-title'
import { Button } from '@/components/layout/buttons/button'

export interface ErrorPanelProps extends ErrorPageProps {
  title: string
  message?: string
}

export const ErrorPanel = ({ title, message, error, reset }: ErrorPanelProps) =>
  <Panel className="flex flex-col">
    <SubTitle>{ title }</SubTitle>
    <div className="mt-16 flex grow flex-col items-center text-gray-400">
      <p className="text-center">{ message ?? error.message }</p>
      <Button text="Retry" size="lg" className="mt-6 mb-14 w-full max-w-[175px]" click={ reset }/>
    </div>
  </Panel>