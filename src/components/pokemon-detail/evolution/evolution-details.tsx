import { EvolutionDetail } from '@/lib/models/evolution-chain.model'
import { ReactNode } from 'react'
import { EvolutionPhrase } from '@/components/pokemon-detail/evolution/evolution-phrase'
import { ArrowDown } from '@/components/icons/arrow-down'


const checkNullTriggers = (evolution: EvolutionDetail): boolean => {
  const currEvo = { ...evolution }
  if (currEvo.trigger?.name === 'level-up') delete currEvo.trigger
  return Object.values(currEvo).every(x => x === null || x === false || x === '')
}

export const EvolutionDetails = ({ details }: { details: EvolutionDetail[] }): ReactNode => {
  if (!details?.length) return null

  // put item triggers at the top of details object
  details.forEach((detail, i) => {
    const triggerName = detail['trigger']?.name
    if (triggerName === 'use-item' || triggerName === 'trade') {
      details.splice(i, 1)
      details.unshift(detail)
    }
  })

  return (
    <div className="mb-6 flex grow flex-col items-center justify-between gap-3">
      <ul className="flex flex-col text-gray-400 divide-y divide-gray-700">
        {
          details.map((currTriggers, index) =>
            checkNullTriggers(currTriggers)
              ? null
              : <EvolutionPhrase triggers={ currTriggers } key={ `evo-detail-${ index }` }/>,
          )
        }
      </ul>
      <ArrowDown className="h-9 w-9 fill-white"/>
    </div>
  )
}