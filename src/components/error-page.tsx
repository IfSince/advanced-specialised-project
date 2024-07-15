import { Button } from '@/components/layout/buttons/button'

export const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) =>
  <section>
    <div className="mx-auto py-20 md:px-10 md:py-52 lg:max-w-screen-xl">
      <div className="mx-auto flex max-w-screen-sm flex-col items-center text-center">
        <h1 className="mb-6 text-6xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">Whoops..</h1>
        <p className="mb-2 text-2xl font-bold tracking-tight md:text-4xl lg:text-3xl">Something went wrong</p>
        <p className="mb-6 font-light text-gray-400 lg:text-lg">{ error.message }</p>
        <Button text="Try again" size="lg" className="w-full max-w-[175px]" click={ reset }/>
      </div>
    </div>
  </section>