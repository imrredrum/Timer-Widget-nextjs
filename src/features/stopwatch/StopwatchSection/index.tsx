'use client'

import { Button } from '@mui/material'
import SectionLayout from '@/components/SectionLayout'
import { useStopwatchStore } from '@/providers/stopwatch'
import StopwatchDisplay from '../StopwatchDisplay'

const StopwatchSection: React.FC = () => {
  const { startTime, isPaused, start, pause, reset } = useStopwatchStore(
    state => state
  )

  return (
    <SectionLayout
      actions={[
        startTime && !isPaused ? (
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
      <StopwatchDisplay />
    </SectionLayout>
  )
}

export default StopwatchSection
