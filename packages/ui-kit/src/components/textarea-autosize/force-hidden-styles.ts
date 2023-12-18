const HIDDEN_TEXTAREA_STYLE = {
  height: '0',
  'max-height': 'none',
  'min-height': '0',
  overflow: 'hidden',
  position: 'absolute',
  right: '0',
  top: '0',
  visibility: 'hidden',
  'z-index': '-1000',
} as const

export const forceHiddenStyles = (node: HTMLElement) => {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(key => {
    node.style.setProperty(
      key,
      HIDDEN_TEXTAREA_STYLE[key as keyof typeof HIDDEN_TEXTAREA_STYLE],
      'important'
    )
  })
}
