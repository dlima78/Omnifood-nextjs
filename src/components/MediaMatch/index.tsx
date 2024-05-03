import React, { useEffect, useState } from 'react'

interface MediaMatchProps {
  lessThan?: 'small' | 'medium' | 'large'
  greaterThan?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}

const breakpoints = {
  small: '(max-width: 599px)',
  medium: '(min-width: 600px) and (max-width: 1199px)',
  large: '(min-width: 1200px)'
}

const MediaMatch: React.FC<MediaMatchProps> = ({
  lessThan,
  greaterThan,
  children
}) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = lessThan
      ? breakpoints[lessThan]
      : greaterThan
        ? breakpoints[greaterThan]
        : null

    if (mediaQuery) {
      const mediaMatcher = window.matchMedia(mediaQuery)
      setMatches(mediaMatcher.matches)

      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches)
      }

      mediaMatcher.addListener(listener)
      return () => mediaMatcher.removeListener(listener)
    }
  }, [lessThan, greaterThan])

  return <>{matches && children}</>
}

export default MediaMatch
