import { useListener } from './use-listener'

export const useWindowResizeListener = (listener: (event: UIEvent) => any) => {
  useListener(window, 'resize', listener)
}
