import { Button } from '@/components/layout/buttons/button'
import Link from 'next/link'
import { SchoolIcon } from '@/components/icons/school'

export default function Home() {
  return (
    <section className="flex h-full sm:pt-10 md:pt-20">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">Welcome to the Pokémon Wiki.</h1>
        <p className="mb-8 text-lg font-normal text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          This home page serves as an example for a static generated site.
        </p>
        <div className="mb-8 flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row sm:justify-center lg:mb-16">
          <a target="_blank" href="https://github.com/IfSince/advanced-specialised-project"
             className="inline-flex items-center justify-center rounded-lg border bg-gray-900 border-gray-900 px-5 py-3 text-center text-base font-medium text-white transition-colors
                        hover:bg-gray-800 hover:border-gray-800 focus-visible:border focus-visible:bg-gray-800 focus-visible:outline-none">
            Check out the code
            <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"/>
            </svg>
          </a>
          <Link href="#">
            <Button text="Go to the e-learning"
                    className="h-full w-full"
                    icon={ <SchoolIcon className="h-6 w-6"/> }
                    size="lg"/>
          </Link>
        </div>
      </div>
    </section>
  )
}
