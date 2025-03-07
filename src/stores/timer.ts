import { createStore } from 'zustand'

export type TimerState = {
  endTime: Date | null
  remain: number
  isActivated: boolean
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
  remain: 0,
  isActivated: false,
  isPaused: false,
})

export const defaultInitState: TimerState = {
  endTime: null,
  remain: 0,
  isActivated: false,
  isPaused: false,
}

export const createTimerStore = (initState: TimerState = defaultInitState) => {
  return createStore<TimerStore>()(set => ({
    ...initState,
    updateRemain: (newValue: number) =>
      set(state => ({
        endTime: new Date(
          (state.endTime?.getTime() ?? Date.now()) + newValue - state.remain
        ),
        remain: newValue,
      })),
    start: () =>
      set(state => ({
        endTime: new Date(Date.now() + state.remain),
        isActivated: true,
        isPaused: false,
      })),
    pause: () =>
      set(state => ({
        remain: (state.endTime?.getTime() ?? Date.now()) - Date.now(),
        isPaused: true,
      })),
    reset: () => set(initState),
  }))
}
