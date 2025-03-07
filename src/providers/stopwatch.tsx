'use client'

import {
  createStopwatchStore,
  initStopwatchStore,
  type StopwatchStore,
} from '@/stores/stopwatch'
import { createContext, useContext, useRef } from 'react'
import { useStore } from 'zustand'

export type StopwatchStoreApi = ReturnType<typeof createStopwatchStore>

export const StopwatchStoreContext = createContext<StopwatchStoreApi | null>(
  null
)

export const StopwatchStoreProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const storeRef = useRef<StopwatchStoreApi>(null)
  if (!storeRef.current) {
    storeRef.current = createStopwatchStore(initStopwatchStore())
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
