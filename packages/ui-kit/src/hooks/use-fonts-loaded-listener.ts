import { useListener } from './use-listener'

export const useFontsLoadedListener = (listener: (event: Event) => any) => {
  useListener(document.fonts, 'loadingdone', listener)
}
