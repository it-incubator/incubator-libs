import { IconProps, IconWrapper } from '../IconWrapper'

const ThumbsUpLightSkinTone = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 72 72'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          xmlnsXlink={'http://www.w3.org/1999/xlink'}
          {...props}
        >
          <path d={'M0 0h72v72H0z'} fill={'url(#prefix__8e09e650-cc1f-11ee-8df6-3bc00402ec38)'} />
          <defs>
            <pattern
              height={1}
              id={'prefix__8e09e650-cc1f-11ee-8df6-3bc00402ec38'}
              patternContentUnits={'objectBoundingBox'}
              width={1}
            >
              <use transform={'scale(.01389)'} xlinkHref={'#prefix__image0_4624_20411'} />
            </pattern>
            <image
              height={72}
              id={'prefix__image0_4624_20411'}
              width={72}
              xlinkHref={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC+lBMVEUAAADpvZnpv57swqDxzavcpYDrwZ7ktJDltZHYnnjUmXLuxaPmtpPPkWrpu5foupbnuZXZn3rqvpvtxKLuxaLnuJTmuJPqv5vdp4Lhr4rpu5jpvZnzz67mt5Tswp7isIvMimTcpYDswp/uxaP0z63MimPpvZrisIvMimPcpYDWmnTnuJPLiWLXnXjgrYjltZHvxqTaon3rwJ3qvZrrwJ310rD42LbvyKbZoXv64MHtxKLVmnTeqYTqv5zmt5TgrIfltJDPjmjswJ3rwJ3dqIPltpLgrYndp4PpvJjKh2Dzz63uxKLswp/64MD64MDou5fYn3nOjmbqvpr64MDswp/Ynnjvx6X638DyzKrbo37Zn3rltpLmtpLrv5zrwJ3Oj2j63r/ZoXv417beqITpvZrhronqvpvisIzwyqfvyafQkWveqYTTlm/xyqjeqIPOj2j53Lv207LnuZXXnXfqv5zfq4bnuZXWnHb63LzgrYjQkWrao37LimP00K7VmXPUl3LfqobeqYT64MHou5fao33uxaL52rrxy6nZoHrNjWbQkWvVmnTWm3bPkGr00K7ktJDoupf63b3SlG764MHQkmvou5jOjmj10rDltZLswp/bpX/52bjIhF3hrorTlnDLimTks4/64MH00a/SlnD64MHswZ7PkGncpoHTlnDPj2jrwZ3JhmD64MHeqYT637/63Lvyzav64MHYn3n64MH64L/zzqz637/63r310rD627r00K763b352rnvx6T42LftxKH21bTyzavyzKr52bj21LPxy6nqv5v63LzuxaLuxqP31rXwyaf00a/xyqjswp/rwJzwyabpvZn207L107H417bnuZXks4/jsY3bo37swZ7mt5PeqoXYn3nvyKXir4vcpoHXnXfou5jltpLeqIPZoHvTlm/YnnjVmXPfq4bSlG3hrongrYjPkGndp4LQkmvoupbaonzOjmj317bqvZrnuJXMi2TltZD53b3hr4rWm3TNjWbUl3HmtpPKh2GGAfhHAAAAs3RSTlMABAIJBh8VDBkZFPfxTk05Lyf3zMimoo9NQSYTEBD9+/n48Ovm5d/a0MGdl46DfHVjWlQ/IRf9+/n09PPv7Ozp5+bj2dfVzMnGxsK/u7exsa+uqaWd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'
              }
            />
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default ThumbsUpLightSkinTone
