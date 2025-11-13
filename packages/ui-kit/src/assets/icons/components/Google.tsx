'use client'
import { IconProps, IconWrapper } from '../IconWrapper'

const Google = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 24 24'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={'M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z'}
            fill={'var(--color-bg-icon)'}
          />
          <mask
            height={18}
            id={'prefix__a'}
            maskUnits={'userSpaceOnUse'}
            style={{
              maskType: 'luminance',
            }}
            width={16}
            x={4}
            y={3}
          >
            <path
              d={
                'M19.778 10.593h-7.593v3.148h4.37c-.407 2-2.11 3.148-4.37 3.148a4.805 4.805 0 01-4.815-4.815 4.805 4.805 0 014.815-4.815 4.71 4.71 0 013 1.074l2.37-2.37c-1.444-1.26-3.296-2.037-5.37-2.037a8.125 8.125 0 00-8.148 8.148 8.125 8.125 0 008.148 8.148c4.074 0 7.778-2.963 7.778-8.148 0-.481-.074-1-.185-1.481z'
              }
              fill={'#fff'}
            />
          </mask>
          <g mask={'url(#prefix__a)'}>
            <path d={'M3.297 16.889v-9.63l6.296 4.815-6.296 4.815z'} fill={'#FBBC05'} />
          </g>
          <mask
            height={18}
            id={'prefix__b'}
            maskUnits={'userSpaceOnUse'}
            style={{
              maskType: 'luminance',
            }}
            width={16}
            x={4}
            y={3}
          >
            <path
              d={
                'M19.778 10.593h-7.593v3.148h4.37c-.407 2-2.11 3.148-4.37 3.148a4.805 4.805 0 01-4.815-4.815 4.805 4.805 0 014.815-4.815 4.71 4.71 0 013 1.074l2.37-2.37c-1.444-1.26-3.296-2.037-5.37-2.037a8.125 8.125 0 00-8.148 8.148 8.125 8.125 0 008.148 8.148c4.074 0 7.778-2.963 7.778-8.148 0-.481-.074-1-.185-1.481z'
              }
              fill={'#fff'}
            />
          </mask>
          <g mask={'url(#prefix__b)'}>
            <path
              d={'M3.297 7.26l6.296 4.814 2.593-2.26 8.889-1.444V3.185H3.297V7.26z'}
              fill={'#EA4335'}
            />
            <mask
              height={18}
              id={'prefix__c'}
              maskUnits={'userSpaceOnUse'}
              style={{
                maskType: 'luminance',
              }}
              width={16}
              x={4}
              y={3}
            >
              <path
                d={
                  'M19.778 10.593h-7.593v3.148h4.37c-.407 2-2.11 3.148-4.37 3.148a4.805 4.805 0 01-4.815-4.815 4.805 4.805 0 014.815-4.815 4.71 4.71 0 013 1.074l2.37-2.37c-1.444-1.26-3.296-2.037-5.37-2.037a8.125 8.125 0 00-8.148 8.148 8.125 8.125 0 008.148 8.148c4.074 0 7.778-2.963 7.778-8.148 0-.481-.074-1-.185-1.481z'
                }
                fill={'#fff'}
              />
            </mask>
            <g mask={'url(#prefix__c)'}>
              <path
                d={'M3.296 16.889L14.407 8.37l2.926.37 3.74-5.555v17.778H3.297V16.89z'}
                fill={'#34A853'}
              />
            </g>
            <mask
              height={18}
              id={'prefix__d'}
              maskUnits={'userSpaceOnUse'}
              style={{
                maskType: 'luminance',
              }}
              width={16}
              x={4}
              y={3}
            >
              <path
                d={
                  'M19.778 10.593h-7.593v3.148h4.37c-.407 2-2.11 3.148-4.37 3.148a4.805 4.805 0 01-4.815-4.815 4.805 4.805 0 014.815-4.815 4.71 4.71 0 013 1.074l2.37-2.37c-1.444-1.26-3.296-2.037-5.37-2.037a8.125 8.125 0 00-8.148 8.148 8.125 8.125 0 008.148 8.148c4.074 0 7.778-2.963 7.778-8.148 0-.481-.074-1-.185-1.481z'
                }
                fill={'#fff'}
              />
            </mask>
            <g mask={'url(#prefix__d)'}>
              <path
                d={'M21.074 20.963L9.593 12.074 8.11 10.963l12.963-3.704v13.704z'}
                fill={'#4285F4'}
              />
            </g>
          </g>
        </svg>
      }
      {...restProps}
    />
  )
}

export default Google
