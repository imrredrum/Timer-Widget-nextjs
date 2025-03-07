import { DEFAULT_TIMER } from '@/libs/configs'
import { createStore } from 'zustand'

export type TimerState = {
  endTime: Date | null
  count: number
  remain: number
  isPaused: boolean
}

export type TimerActions = {
  updateRemain: (newValue: number) => void
  start: () => void
  pause: () => void
  reset: () => void
}

export type TimerStore = TimerState & TimerActions

export const initTimerStore = (): TimerState => ({
  endTime: null,
  count: DEFAULT_TIMER ?? 0,
  remain: DEFAULT_TIMER ?? 0,
  isPaused: false,
})

export const defaultInitState: TimerState = {
  endTime: null,
  count: DEFAULT_TIMER ?? 0,
  remain: 0,
  isPaused: false,
}

export const createTimerStore = (initState: TimerState = defaultInitState) => {
  return createStore<TimerStore>()(set => ({
    ...initState,
    updateRemain: (newValue: number) =>
      set({ ...initState, count: newValue, remain: newValue }),
    start: () =>
      set(state => ({
        endTime: new Date(Date.now() + state.remain),
        isPaused: false,
      })),
    pause: () =>
      set(state => ({
        remain: state.endTime
          ? state.endTime.getTime() - Date.now()
          : state.remain,
        isPaused: true,
      })),
    reset: () =>
      set(state => ({ ...initState, count: state.count, remain: state.count })),
  }))
}
