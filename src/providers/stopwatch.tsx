'use client'

import useInterval from '@/libs/hooks/useInterval'
import {
  createStopwatchStore,
  initStopwatchStore,
  type StopwatchStore,
} from '@/stores/stopwatch'
import { createContext, useCallback, useContext, useRef } from 'react'
import { useStore } from 'zustand'

export type StopwatchStoreApi = ReturnType<typeof createStopwatchStore>

export const StopwatchStoreContext = createContext<StopwatchStoreApi | null>(
  null
)

export const StopwatchStoreProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const storeRef = useRef<StopwatchStoreApi>(null)

  const handleTick = useCallback(() => {
    if (storeRef.current === null) return undefined
    const elapsed =
      Date.now() -
      (storeRef.current.getState().startTime ?? new Date()).getTime()
    if (elapsed <= 0) return undefined
    storeRef.current.setState(state => ({
      stored: state.stored + elapsed,
      startTime: new Date(),
    }))
  }, [])

  const { pause, resume } = useInterval(handleTick, 10)

  if (!storeRef.current) {
    storeRef.current = createStopwatchStore(initStopwatchStore())
    storeRef.current.setState(state => ({
      pause: () => {
        pause()
        state.pause()
      },
      start: () => {
        resume()
        state.start()
      },
      reset: () => {
        pause()
        state.reset()
      },
    }))
  }

  return (
    <StopwatchStoreContext.Provider value={storeRef.current}>
      {children}
    </StopwatchStoreContext.Provider>
  )
}

export const useStopwatchStore = <T,>(
  selector: (store: StopwatchStore) => T
): T => {
  const stopwatchStoreContext = useContext(StopwatchStoreContext)

  if (!stopwatchStoreContext) {
    throw new Error(
      `useStopwatchStore must be used within StopwatchStoreProvider`
    )
  }

  return useStore(stopwatchStoreContext, selector)
}
