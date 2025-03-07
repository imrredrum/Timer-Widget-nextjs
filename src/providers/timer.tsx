'use client'

import {
  createTimerStore,
  initTimerStore,
  type TimerStore,
} from '@/stores/timer'
import { createContext, useContext, useRef } from 'react'
import { useStore } from 'zustand'

export type TimerStoreApi = ReturnType<typeof createTimerStore>

export const TimerStoreContext = createContext<TimerStoreApi | null>(null)

export const TimerStoreProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const storeRef = useRef<TimerStoreApi>(null)
  if (!storeRef.current) {
    storeRef.current = createTimerStore(initTimerStore())
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
