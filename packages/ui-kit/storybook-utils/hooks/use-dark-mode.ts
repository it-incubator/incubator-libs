import { useEffect } from 'react'

/** Use this hook to add the dark mode class to the body element.
 *  Useful for modals because they are not rendered inside the
 *  dark mode class
 */
export const useDarkMode = () => {
  useEffect(() => {
    const body = document.querySelector('body')

    if (body) {
      body.classList.add('dark-mode')
    }

    return () => {
      if (body) {
        body.classList.remove('dark-mode')
      }
    }
  }, [])
}
