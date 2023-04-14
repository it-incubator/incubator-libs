import { useState, useEffect } from 'react'

const getDeviceType = (): 'mobile' | 'desktop' => {
  const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent
  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

  return mobile ? 'mobile' : 'desktop'
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
