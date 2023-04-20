import { useState, useEffect } from 'react'

const getDeviceType = (): 'mobile' | 'desktop' => {
  if (typeof window === 'undefined') {
    return 'mobile'
  }

  return window.innerWidth > 768 ? 'desktop' : 'mobile'
}

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'desktop'>(() => getDeviceType())

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const isMobile = deviceType === 'mobile'
  const isDesktop = deviceType === 'desktop'

  return { deviceType, isDesktop, isMobile }
}
