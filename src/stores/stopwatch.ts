import { createStore } from 'zustand'

export type StopwatchState = {
  startTime: Date | null
  stored: number
  isPaused: boolean
}

export type StopwatchActions = {
  start: () => void
  pause: () => void
  reset: () => void
}

export type StopwatchStore = StopwatchState & StopwatchActions

export const initStopwatchStore = (): StopwatchState => ({
  startTime: null,
  stored: 0,
  isPaused: false,
})

export const defaultInitState: StopwatchState = {
  startTime: null,
  stored: 0,
  isPaused: false,
}

export const createStopwatchStore = (
  initState: StopwatchState = defaultInitState
) => {
  return createStore<StopwatchStore>()(set => ({
    ...initState,
    start: () =>
      set({
        startTime: new Date(),
        isPaused: false,
      }),
    pause: () =>
      set(state => ({
        stored:
          Date.now() -
          (state.startTime?.getTime() ?? Date.now()) +
          state.stored,
        isPaused: true,
      })),
    reset: () => set(initState),
  }))
}
