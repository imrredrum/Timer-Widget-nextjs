'use client'

import millisecondsToTimeObject from '@/libs/utils/millisecondsToTime'
import { useTimerStore } from '@/providers/timer'
import { TextField } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

function millisecondsToTimeString(time: number): string {
  const timeObject = millisecondsToTimeObject(time)
  return `${timeObject.hours.toString().padStart(2, '0')}:${timeObject.minutes
    .toString()
    .padStart(2, '0')}:${timeObject.seconds.toString().padStart(2, '0')}`
}

function formatTime(value: string): string {
  let digits = value.replace(/\D/g, '')

  if (digits.length > 6) digits = digits.slice(-6)

  while (digits.length < 6) digits = '0' + digits

  const hours = digits.slice(0, 2)
  const minutes = digits.slice(2, 4)
  const seconds = digits.slice(4, 6)

  return `${hours}:${minutes}:${seconds}`
}

const TimerInput: React.FC<{ onComplete: (newValue?: number) => void }> = ({
  onComplete,
}) => {
  const { endTime, remain: time } = useTimerStore(state => state)
  const [timeString, setTimeString] = useState('00:00:00')
  const isChanged = useRef(false)

  useEffect(() => {
    setTimeString(millisecondsToTimeString(endTime ? time + 1000 : time))
  }, [endTime, time])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    isChanged.current = true
    const formattedTime = formatTime(event.target.value)
    setTimeString(formattedTime)
  }

  const handleComplete = () => {
    onComplete(
      isChanged.current
        ? timeString
            .split(':')
            .reduce(
              (acc, cur, idx) => (acc += Number(cur) * Math.pow(60, 2 - idx)),
              0
            ) * 1000
        : undefined
    )
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = event => {
    if (event.key !== 'Enter') return undefined
    event.preventDefault()
    handleComplete()
  }

  const handleBlur = () => {
    handleComplete()
  }

  return (
    <TextField
      autoFocus
      variant='standard'
      value={timeString}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      slotProps={{
        input: { sx: { fontSize: '3rem', pb: '1px' } },
        htmlInput: {
          inputMode: 'numeric',
          pattern: '[0-9]*',
          sx: {
            px: 1,
            py: 0,
            lineHeight: 1.5,
            width: '11.5rem',
            height: 'unset',
          },
        },
      }}
    />
  )
}

export default TimerInput
