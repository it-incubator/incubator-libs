import { CSSProperties } from 'react'

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  height: 'min-content',
}

export const VerticalContainer = ({ children }) => {
  return <div style={styles}>{children}</div>
}
