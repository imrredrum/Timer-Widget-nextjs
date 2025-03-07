import { useCallback, useEffect, useRef, useState } from 'react'

function useInterval(onTick: () => void, tickInterval: number) {
  const savedCallback = useRef<typeof onTick>(null)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    savedCallback.current = onTick
  }, [onTick])

  useEffect(() => {
    if (!tickInterval || tickInterval <= 0 || !isRunning) return undefined

    function tick() {
      if (savedCallback.current) savedCallback.current()
    }

    tick()

    const id = setInterval(tick, tickInterval)
    return () => clearInterval(id)
  }, [tickInterval, isRunning])

  const pause = useCallback(() => setIsRunning(false), [])
  const resume = useCallback(() => setIsRunning(true), [])

  return { pause, resume }
}

export default useInterval
