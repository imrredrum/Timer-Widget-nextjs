'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

export type FullscreenApi = {
  targetRef: React.RefObject<HTMLDivElement | null>
  isFullscreen: boolean
  onToggle: () => void
}

export const FullscreenContext = createContext<FullscreenApi | null>(null)

export const FullscreenProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  const handleToggle = useCallback(() => {
    if (!document.fullscreenElement && targetRef.current) {
      targetRef.current.requestFullscreen()
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    document.addEventListener(
      'fullscreenchange',
      () => {
        setIsFullscreen(Boolean(document.fullscreenElement))
      },
      {
        signal,
      }
    )

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <FullscreenContext.Provider
      value={{
        targetRef,
        isFullscreen,
        onToggle: handleToggle,
      }}
    >
      {children}
    </FullscreenContext.Provider>
  )
}

export const useFullscreen = () => {
  const fullscreenContext = useContext(FullscreenContext)

  if (!fullscreenContext) {
    throw new Error(`useFullscreen must be used within FullscreenProvider`)
  }

  return fullscreenContext
}
