'use client'

import { Button } from '@/components/layout/buttons/button'
import { Sync } from '@/components/icons/sync'

export const RefreshDataButton = ({ action }: { action: Function }) =>
  <Button text="Refresh data"
          icon={ <Sync className="h-6 w-6"/> }
          click={ () => action() }/>