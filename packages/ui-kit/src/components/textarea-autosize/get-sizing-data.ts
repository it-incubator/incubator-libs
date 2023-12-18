import { pick } from '../../utils'

const SIZING_STYLE = [
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'boxSizing',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  // non-standard
  'tabSize',
  'textIndent',
  // non-standard
  'textRendering',
  'textTransform',
  'width',
  'wordBreak',
] as const

type SizingProps = Extract<(typeof SIZING_STYLE)[number], keyof CSSStyleDeclaration>

type SizingStyle = Pick<CSSStyleDeclaration, SizingProps>

export type SizingData = {
  borderSize: number
  paddingSize: number
  sizingStyle: SizingStyle
}

export const getSizingData = (node: HTMLElement): SizingData | null => {
  const style = window.getComputedStyle(node)

  if (style === null) {
    return null
  }

  const sizingStyle = pick(SIZING_STYLE as unknown as SizingProps[], style)
  const { boxSizing } = sizingStyle

  // probably node is detached from DOM, can't read computed dimensions
  if (boxSizing === '') {
    return null
  }

  const paddingSize = parseFloat(sizingStyle.paddingBottom!) + parseFloat(sizingStyle.paddingTop!)

  const borderSize =
    parseFloat(sizingStyle.borderBottomWidth!) + parseFloat(sizingStyle.borderTopWidth!)

  return {
    borderSize,
    paddingSize,
    sizingStyle,
  }
}
