import { useEffect, useState } from 'react'

const getDeviceType = (): 'desktop' | 'mobile' => {
  if (typeof window === 'undefined') {
    return 'mobile'
  }

  return window.innerWidth > 768 ? 'desktop' : 'mobile'
}

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<'desktop' | 'mobile'>(() => getDeviceType())

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
