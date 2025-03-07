'use client'

import useInterval from '@/libs/hooks/useInterval'
import {
  createTimerStore,
  initTimerStore,
  type TimerStore,
} from '@/stores/timer'
import { createContext, useCallback, useContext, useRef } from 'react'
import { useStore } from 'zustand'

export type TimerStoreApi = ReturnType<typeof createTimerStore>

export const TimerStoreContext = createContext<TimerStoreApi | null>(null)

export const TimerStoreProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const storeRef = useRef<TimerStoreApi>(null)

  const handleTick = useCallback(() => {
    if (storeRef.current === null) return undefined
    const remain =
      (storeRef.current.getState().endTime ?? new Date()).getTime() - Date.now()
    if (remain > 0) {
      storeRef.current.setState({ remain: remain })
      return undefined
    }
    storeRef.current.setState({ endTime: null, remain: 0 })
    storeRef.current.getState().pause()
  }, [])

  const { pause, resume } = useInterval(handleTick, 1000)

  if (!storeRef.current) {
    storeRef.current = createTimerStore(initTimerStore())
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
    <TimerStoreContext.Provider value={storeRef.current}>
      {children}
    </TimerStoreContext.Provider>
  )
}

export const useTimerStore = <T,>(selector: (store: TimerStore) => T): T => {
  const timerStoreContext = useContext(TimerStoreContext)

  if (!timerStoreContext) {
    throw new Error(`useTimerStore must be used within TimerStoreProvider`)
  }

  return useStore(timerStoreContext, selector)
}
