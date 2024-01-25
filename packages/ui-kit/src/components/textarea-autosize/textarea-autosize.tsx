// https://github.com/Andarist/react-textarea-autosize/tree/main

import * as React from 'react'

import { useComposedRef, useFontsLoadedListener, useWindowResizeListener } from '../../hooks'
import { noop } from '../../utils'
import calculateNodeHeight from './calculate-node-height'
import { SizingData, getSizingData } from './get-sizing-data'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export type Style = Omit<NonNullable<TextareaProps['style']>, 'maxHeight' | 'minHeight'> & {
  height?: number
}

export type TextareaHeightChangeMeta = {
  rowHeight: number
}
export interface TextareaAutosizeProps extends Omit<TextareaProps, 'style'> {
  cacheMeasurements?: boolean
  maxRows?: number
  minRows?: number
  onHeightChange?: (height: number, meta: TextareaHeightChangeMeta) => void
  style?: Style
}
const isDevelopment = process.env.NODE_ENV === 'development'
const TextareaAutosize: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaAutosizeProps
> = (
  { cacheMeasurements, maxRows, minRows, onChange = noop, onHeightChange = noop, ...props },
  userRef: React.Ref<HTMLTextAreaElement>
) => {
  if (isDevelopment && props.style) {
    if ('maxHeight' in props.style) {
      throw new Error(
        'Using `style.maxHeight` for <TextareaAutosize/> is not supported. Please use `maxRows`.'
      )
    }
    if ('minHeight' in props.style) {
      throw new Error(
        'Using `style.minHeight` for <TextareaAutosize/> is not supported. Please use `minRows`.'
      )
    }
  }
  const isControlled = props.value !== undefined
  const libRef = React.useRef<HTMLTextAreaElement | null>(null)
  const ref = useComposedRef(libRef, userRef)
  const heightRef = React.useRef(0)
  const measurementsCacheRef = React.useRef<SizingData>()

  const resizeTextarea = () => {
    const node = libRef.current!
    const nodeSizingData =
      cacheMeasurements && measurementsCacheRef.current
        ? measurementsCacheRef.current
        : getSizingData(node)

    if (!nodeSizingData) {
      return
    }

    measurementsCacheRef.current = nodeSizingData

    const [height, rowHeight] = calculateNodeHeight(
      nodeSizingData,
      node.value || node.placeholder || 'x',
      minRows,
      maxRows
    )

    if (heightRef.current !== height) {
      heightRef.current = height
      node.style.setProperty('height', `${height}px`, 'important')
      onHeightChange(height, { rowHeight })
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) {
      resizeTextarea()
    }
    onChange(event)
  }

  React.useLayoutEffect(resizeTextarea)
  useWindowResizeListener(resizeTextarea)
  useFontsLoadedListener(resizeTextarea)

  return <textarea {...props} onChange={handleChange} ref={ref} />
}

export default /* #__PURE__ */ React.forwardRef(TextareaAutosize)
