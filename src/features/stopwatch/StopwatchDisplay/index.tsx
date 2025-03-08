'use client'

import millisecondsToTimeObject from '@/libs/utils/millisecondsToTime'
import { useFullscreen } from '@/providers/fullscreen'
import { useStopwatchStore } from '@/providers/stopwatch'
import { Stack, Typography } from '@mui/material'

const StopwatchDisplay: React.FC = () => {
  const { isFullscreen } = useFullscreen()
  const { stored } = useStopwatchStore(state => state)

  const totalObject = millisecondsToTimeObject(stored)

  return (
    <Stack
      direction='row'
      spacing={isFullscreen ? 2 : 1.5}
      px={1.5}
      display='inline-flex'
      alignItems='baseline'
      sx={{
        borderBottom: 1,
        borderColor: 'transparent',
      }}
    >
      {!!totalObject.hours && (
        <Stack direction='row' alignItems='baseline'>
          <Typography fontSize={isFullscreen ? '6.25rem' : '3rem'}>
            {totalObject.hours.toString()}
          </Typography>
          <Typography fontSize={isFullscreen ? '3.125rem' : '1.5rem'}>
            h
          </Typography>
        </Stack>
      )}
      {(!!totalObject.hours || !!totalObject.minutes) && (
        <Stack direction='row' alignItems='baseline'>
          <Typography fontSize={isFullscreen ? '6.25rem' : '3rem'}>
            {totalObject.hours
              ? totalObject.minutes.toString().padStart(2, '0')
              : totalObject.minutes.toString()}
          </Typography>
          <Typography fontSize={isFullscreen ? '3.125rem' : '1.5rem'}>
            m
          </Typography>
        </Stack>
      )}
      <Stack direction='row' alignItems='baseline'>
        <Typography fontSize={isFullscreen ? '6.25rem' : '3rem'}>
          {totalObject.minutes
            ? totalObject.seconds.toString().padStart(2, '0')
            : totalObject.seconds.toString()}
        </Typography>
        <Typography fontSize={isFullscreen ? '3.125rem' : '1.5rem'}>
          s
        </Typography>
      </Stack>
      <Typography fontSize={isFullscreen ? '3.125rem' : '1.5rem'}>
        {totalObject.milliseconds.toString().padStart(2, '0')}
      </Typography>
    </Stack>
  )
}

export default StopwatchDisplay
