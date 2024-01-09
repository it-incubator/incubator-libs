import { useEffect, useState } from 'react'

type Device = 'desktop' | 'mobile' | 'tablet'
const getDeviceType = (): Device => {
  if (typeof window === 'undefined') {
    return 'mobile'
  }

  if (window.innerWidth <= 768) {
    return 'mobile'
  }

  if (window.innerWidth <= 1280) {
    return 'tablet'
  }

  return 'desktop'
}

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<Device>(() => getDeviceType())

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
  const isTablet = deviceType === 'tablet'

  return { deviceType, isDesktop, isMobile, isTablet }
}
