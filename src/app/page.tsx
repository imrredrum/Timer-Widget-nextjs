'use client'

import ModeTabs from '@/components/ModeTabs'
import StopwatchSection from '@/features/stopwatch/StopwatchSection'
import TimerSection from '@/features/timer/TimerSection'
import type { TMode } from '@/libs/types'
import { useFullscreen } from '@/providers/fullscreen'
import { Card, CardActions, cardClasses, Container } from '@mui/material'
import { useState } from 'react'

export default function Home() {
  const { targetRef } = useFullscreen()
  const [mode, setMode] = useState<TMode>('timer')

  const handleChange = (newValue: TMode) => {
    setMode(newValue)
  }

  return (
    <Container
      maxWidth='sm'
      sx={{
        py: 3,
        [`.${cardClasses.root}`]: {
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Card variant='outlined' ref={targetRef}>
        <CardActions sx={{ p: 0 }}>
          <ModeTabs mode={mode} onChange={handleChange} />
        </CardActions>
        {mode === 'timer' && <TimerSection />}
        {mode === 'stopwatch' && <StopwatchSection />}
      </Card>
    </Container>
  )
}
