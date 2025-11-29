import * as React from 'react'

// basically Exclude<React.ClassAttributes<T>["ref"], string>
type UserRef<T> = ((instance: T | null) => void) | React.RefObject<T | null> | null | undefined

type Writable<T> = { -readonly [P in keyof T]: T[P] }

const updateRef = <T>(ref: NonNullable<UserRef<T>>, value: T | null) => {
  if (typeof ref === 'function') {
    ref(value)

    return
  }

  ;(ref as Writable<React.RefObject<T | null>>).current = value
}

export const useComposedRef = <T extends HTMLElement>(
  libRef: React.MutableRefObject<T | null>,
  userRef: UserRef<T>
) => {
  const prevUserRef = React.useRef<UserRef<T> | undefined>(undefined)

  return React.useCallback(
    (instance: T | null) => {
      libRef.current = instance

      const prevRef = prevUserRef.current

      if (prevRef) {
        updateRef(prevRef, null)
      }

      prevUserRef.current = userRef

      if (userRef) {
        updateRef(userRef, instance)
      }
    },
    [libRef, userRef]
  )
}
