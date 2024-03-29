import * as React from 'react'

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect'

export const useLatest = <T>(value: T) => {
  const ref = React.useRef(value)

  useIsomorphicLayoutEffect(() => {
    ref.current = value
  })

  return ref
}
