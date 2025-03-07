'use client'

import ModeTabs from '@/components/ModeTabs'
import TimerSection from '@/components/TimerSection'
import type { TMode } from '@/libs/types'
import { Card, CardActions, cardClasses, Container } from '@mui/material'
import { useState } from 'react'

export default function Home() {
  const [mode, setMode] = useState<TMode>('timer')

  const handleChange = (newValue: TMode) => {
    setMode(newValue)
  }

  return (
    <Container
      maxWidth='sm'
      sx={{ py: 3, [`.${cardClasses.root}`]: { borderRadius: 2 } }}
    >
      <Card variant='outlined'>
        <CardActions sx={{ p: 0 }}>
          <ModeTabs mode={mode} onChange={handleChange} />
        </CardActions>
        {mode === 'timer' && <TimerSection />}
        {mode === 'stopwatch' && <div>Stopwatch</div>}
      </Card>
    </Container>
  )
}
