import { CSSProperties } from 'react'

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  height: 'min-content',
  padding: '50px',
  border: '1px solid #ccc',
}

export const VerticalContainer = ({ children }) => {
  return <div style={styles}>{children}</div>
}
