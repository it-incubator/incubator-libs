import { ReactNode } from 'react'

export const ValuePreview = ({ children }: { children: ReactNode }) => {
  return <div style={{ color: 'white', mixBlendMode: 'difference' }}>{children}</div>
}
