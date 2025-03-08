'use client'

import { Button } from '@mui/material'
import { useState } from 'react'
import { useTimerStore } from '@/providers/timer'
import SectionLayout from '@/components/SectionLayout'
import TimerInput from '../TimerInput'
import TimerDisplay from '../TimerDisplay'

const TimerSection: React.FC = () => {
  const { endTime, isPaused, updateRemain, start, pause, reset } =
    useTimerStore(state => state)

  const [isEditing, setIsEditing] = useState(false)

  const handleClick = () => {
    setIsEditing(true)
    if (!isPaused) pause()
  }

  const handleComplete = (newValue?: number) => {
    if (newValue) updateRemain(newValue)
    setIsEditing(false)
  }

  return (
    <SectionLayout
      actions={[
        endTime && !isPaused ? (
          <Button
            key='pause'
            size='small'
            variant='outlined'
            disableElevation
            onClick={pause}
          >
            Pause
          </Button>
        ) : (
          <Button
            key='start'
            size='small'
            variant='contained'
            disableElevation
            onClick={start}
          >
            Start
          </Button>
        ),
        <Button
          key='reset'
          size='small'
          variant='outlined'
          disableElevation
          onClick={reset}
        >
          Reset
        </Button>,
      ]}
    >
      {isEditing ? (
        <TimerInput onComplete={handleComplete} />
      ) : (
        <TimerDisplay onClick={handleClick} />
      )}
    </SectionLayout>
  )
}

export default TimerSection
