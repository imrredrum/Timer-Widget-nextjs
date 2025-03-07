'use client'

import millisecondsToTimeObject from '@/libs/utils/millisecondsToTime'
import { useTimerStore } from '@/providers/timer'
import { Stack, Typography } from '@mui/material'

const TimerDisplay: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { endTime, remain } = useTimerStore(state => state)

  const remainObject = millisecondsToTimeObject(
    endTime ? remain + 1000 : remain
  )

  return (
    <Stack
      direction='row'
      spacing={1}
      px={1.5}
      display='inline-flex'
      sx={{ borderBottom: 1, borderColor: 'divider' }}
      onClick={onClick}
    >
      {!!remainObject.hours && (
        <Stack direction='row' alignItems='baseline'>
          <Typography fontSize='3rem'>
            {remainObject.hours.toString()}
          </Typography>
          <Typography fontSize='1.5rem'>h</Typography>
        </Stack>
      )}
      {(!!remainObject.hours || !!remainObject.minutes) && (
        <Stack direction='row' alignItems='baseline'>
          <Typography fontSize='3rem'>
            {remainObject.hours
              ? remainObject.minutes.toString().padStart(2, '0')
              : remainObject.minutes.toString()}
          </Typography>
          <Typography fontSize='1.5rem'>m</Typography>
        </Stack>
      )}
      {
        <Stack direction='row' alignItems='baseline'>
          <Typography fontSize='3rem'>
            {remainObject.minutes
              ? remainObject.seconds.toString().padStart(2, '0')
              : remainObject.seconds.toString()}
          </Typography>
          <Typography fontSize='1.5rem'>s</Typography>
        </Stack>
      }
    </Stack>
  )
}

export default TimerDisplay
