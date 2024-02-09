import { IconProps, IconWrapper } from '../IconWrapper'

const YawningFace = (allProps: IconProps) => {
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
          <path d={'M0 0h72v72H0z'} fill={'url(#prefix__1db65950-c743-11ee-9a89-973d58329563)'} />
          <defs>
            <pattern
              height={1}
              id={'prefix__1db65950-c743-11ee-9a89-973d58329563'}
              patternContentUnits={'objectBoundingBox'}
              width={1}
            >
              <use transform={'scale(.01389)'} xlinkHref={'#prefix__image0_4624_21405'} />
            </pattern>
            <image
              height={72}
              id={'prefix__image0_4624_21405'}
              width={72}
              xlinkHref={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC/VBMVEUAAAC6fTjHeyfAdyD8kwTLbATFdRzJeB7JcRXkjCD8rRn5mQe+aAeLQgPPbgTLawTMbAnuiA7Mbw3hhRnyhgXFaArxmhzFbRG4YA37oA7mfgrPcA3DaAvlgA7JbQ6wXA/KawauVAWgSgWSRQbDbBXWgiP5kQjlfAbEaAiiSQT0oyHukhrrjxuyUgTJaghxNgZ5MQO8XQX6qBj4oBX2kw30lhP0lhTyhwjxhgmJPQb2oRr2oRuORQf6yzT5yDP4xDH/uSX/+Y3+th//1i38rxX/+ZX8zjb/2i///L3/+7X/7UX+shr//cv/vzD/0CzytCpVKQj//dP/8Er/5zf/yCz/uythNQ//+qH6qxT/60D/yyz//uD//MT/wjT/4zNZNBL/+qr/+pv+1ET/3jD/wyromR5WMA//+IT/5T7+0jnbhwr+1U/3wTDspCXjgxNzQAr/+7D/+Hzuryjuqib4qRHolg3WgQv/9lf1vS7/vynrmxHeeg9EJAfVeAX/837/zjD/xS/yuizkkgz/+qb/6Xn/6jv/4TfgjApcLwpNIwc7HQT/9FD/xzL/1DH3uC30riaQWxH/91/90E3/vAyBSwv/rQrZfQXwjATRcQP//dn/8XTooCDMgRX0phSfZBBQLg5qOglLKQnRdwX/93H/+Gj/5F7/31T70ELlihf/8JL/4Wv7zDzwoRS9chFlOhH0nQr/qAnojAamVgbifQL/2jjdmSLSjB/2pQ7umQqYTge3WAV7OAP/84j/6Wv/21/+1Vj5xk3/yzOueBrFfBf/xhHzow/vnw62aA3YcAz/ogffhAb/mwX98Gnr3Vz/3Uzvnh/plBvjkBv/vhn/0xbQaAn/tQj8xjDzyCf/zBnIYQf//uj962L/0EHFpjrutSn+3UX/yj7/xjvYqCj/2xuqaBH/6ob5xEPwsji2kC//3Cr50il9WR9sLwHizEe1o0Tiu0D4uzzlqC6Mby3sviW+hB1rRRf/tRLcjxLKu0bLmRrUyVmqiTL57Fbw0kqVaRtycI+cAAAAPXRSTlMABhUN/v4dLldP+/7+/vjytaeTX/WqmGhg88Cln5qCON7Wn2tJJe/hw7ioiHPtzKPx5uTY0r63187NxMK3qUwhrQAACgRJREFUWMPU0T1rwkAYwPEaQyU6hUDAoaMO1anvtFPfILZSsAhCDcXSobjlE7gY/AJHBt0dzilDx0CXLMHikHAQ7CgZ/ALOfe48cfCl2k79TyHP8eNedv5jMeiPhJCQ8jl1H1JzeSkh/MqLZST14iB5f+Wzru6TB+eqktnWikvqYXLiu2EQjFhBELr+JHmoSsI2R1JO0jcIlNHz3Ven4Thvnc/H1hgsdJM+VjalYtJJ2kJuML5rNPV2dTitWjSc7mvgIit9LMU3cTIqY1odo1SdNqzySpozYJSc2GA7Rx5BYcvRSlC73Z4h8FmCdDwIEfGOlNgPl5zP2sS9NgtFGrNoXGE/NfzuEjubE9be8l7KRu6gommaruvcgriiQzAyuiGyUvLuamdXTlko7NUKELfmUQQq0KIHZPVXS4IsgmPWajXDMOYYjyMwggW4vkaK74k2eTIrlUqz2aQaxyCOMAOGsAQkW5SFpe+VFz1SNvHtC0Q1hkGMgGYGnWMc1Ykt5pa9nZT1iN/DGN/SKMb3xpobdHoJy8wy8bLKopM561voI4ocx7mkMY1zjJgZNFgURT3f6p8mFg5GL+ibbLp5SSSMAzjObkKRlyWEhWLby4L/xqxGA4oypA4m2EFlU+YgQRCyoB5cMUpQWRmYQyzYuDAHNRR2Lxl2Ex2vezBRO/mCCoZhr+zvaabR9EsEPs8zH55nHr0KBAJer3cX+ipoUpKxi4JFsPTiFl7TwuzBFKW4gwtAjNe7h0IieJPQ4+IUw8BCjmvGS4qZw71flRVvKY47Pz9nGCaRKPODWqtV4/Z2pbw8GulVmQQDwUKOy6systW3N7eENpTPs0gql6u9VvcXAT0we1J8FwZC7ucaX4bAYfP5RrxEv9nSAtpQ7AIklq1Wn1pueIQkQ4fDxCQ+9TJGhCK1ZLXKsuBcxFTFt1v6opBlTDEqmUyybHIQgSdSJJkaDe9Pp+p3RyQJEwR5+QTLICpmzZQUS9NXRpfizRhFVZLJyrWbgNWpYf+eL59Gpzot8+OHLlAhIjIApkJRsYa2RH96N/mxKmVFbfPKZqMqlYGbSKXI4X01Gj2YKxrl+120qefflQpls101sKJMuTj1qmVFrNkAqV5/IEhy1H882IKOZkJjB/wQ3lToul5HTtOUkU19A1ZoecZkFaTat1B3fKSBtuBvppfhx/6IGPUEx6ozy+Fs0p3RcrPJelzYdLly9fGY1zid25Bmpm0NDDqdzq1erefMuVybhWOrbllOS/e2qESQzi9IsDIYhH+AzQaKOCs6fp1pOU0rP79e/nc6bcY8fn/B5wuHc7lcEHIaDD/mMhjQVA4Kh32+gt/vwQDKLonQxyxAKpPHYbQgCcft9uAOZJhrZycYtNtxHEeOxehwmFQIWheh9RcIA8ho0evDahwoCKgJJ36AYeSow3q9xWh0eDCVGaCV10vLnqX3tZhHlNSQZNnxzj+og9tFBYJ5cCzgeDAtgtaEa3u3hqANtCU4nCQB1e7c3F1GfkKRy7ubTrvdRozkoA1p99Nn2Q8T6O8fBHkESJTUnesTN3EoRrhPwBKdCbQxB4k7EqSw+n8vdhuSRhzHAXwmrjEsxyAKFnuoDbYXe3o52HljC99EnG8WMpCBTMGHO+GuxKUy9Y0pTUVEBM1O3yiYeyHoZsF0SlN6o0EUwvDFkHozWLEg9m6//9212lM0BvtCvbJPv+/vf+idjzY7HxOT8Pc6IUovu7dNbwLzkncE6PWbI1AEINX4Azg3J0gvAHr5hTYVzN4Fne6pEF3wczlU2Nt89BKgF+A4nz1/zEMRgPhlA7QyxUNOgOAawD66jKHiJDBCJquVt0Z/fba6udmhXU8ECHa9AtAFAbroWJ1+j7Y9MeF0ziHoxZc9l7G8E/wOveKcOOtVVpmdba0LHOfEBLei6VXHwfEPRlfd71+PwUggzc29gwv8a7ijKVdyOj4Lr/a2yhq/xbyQNBdC5crax405cLhm7wG6KEBX+1E31fhDgNSc1DGztMZYqekWuLBxXKMHJ7kQ3DWWK0wNIDVAD8dVsKLV/jMC1Hs54plegW4wkloNkLNqZ3cRhBSYorih1/vj5qQuQWhCW2Su2plTq7mBplbeeCKySwLUc92BusFIgkSzdpbRGLdySZTwGuew9tmqX5/dKZQSu2oIODAQanar5/sbGywJzo3fEkh7XnuYSId2unZIWIuc2qT9VQ3XZ7eLYW8VmImDgdyr0WHRAXSmH7odjjQR9NkTJk1oJwFOMIZp9NbarA8VlNM1FmjaD44wkCfSP3j45n8Zus3ASLxEsD5lXK5J+wEMklmjEY/P+mAwhYmsz/rs4eI2SSMHBppxrzou936HRMNRNNK8ipd2dT5zDEtniWAywYDzIcYmE+SGwqrNe33K7nY5RBYIcFTzaKDogOjIB6TMYXDPLE7xUiHp6xIKhZwoFglMY0zjhUSckCv8ayU7FKyEKtvxeGB8XIUGMjjg8A8jPodGQuWQVEgqiyaFAvf7TZgircesgYApq/Dvh33JxG6lAuffLYxDMTSQJXr9h7uIof6UAZXjpEIy3NyAiXAcU0AwHM9q0qai2cfW/FtbMFiicHYMii1yAw3+eFtzLsqVm1dBu9hsPSBHAsb9gqlCIXlx0h7UmuSmQNysLI4dOJborZ9ubc/IUhYPkqZUU9qgISDnh+GSTaflRNdcIzDM2oRzY+fHVMiBYinZ0M/3xsMSh8UzDdL84n6uReAcIUBZzESQDK7AuH37gvDvOMfgiA788qDUewvKIWlxJm5pEiY5diRy3IpnFTjU8vnMOYqaRo7bEIny19DP5aIWJM3s56gmYcXlPwTq4UxdCUwz0LTFZzgnJRv83Q37xf4USG63JUdpaZcJP0phsCYm6GVz2kCgSdXjyLGkJOfFv30UGZaAZDDUAGIIlxUoIWgiubUQTgDDtBz57r4bHIdkoOcPD0cDIFksOSnVImnC5bJaTYeYlWDIAIyTqfcl4vse5JyDk/+jFE2l6lIqowWp4+IsPlYXQRABsmUrhRM1g8cQAefaMQ9sw1KJpFu3Ua0Yw9B0h7dQXMAwzYykbzmfg/6RlGTg9LGPkBfvSvP5BrWmjZGIogkCOoJCM2SzRdWXl0t1qO+Iys73HOeITomGruRL6zYkxUiwOA0UUtvKUHlw8tKUIyW5PAjndbx0qnekb6mBJKAgJCQW065lKFv+03JfXipJRWUDvaLjFIESj15pg5RptbR8WkixNUrglJZgideHxPCyk+TSXSRRGT4URdkajXYfcvJL0uuDp0/IoEXdbK83bHwAaay388uflgG6MnymB73ipIGVL7Xb63za7SVgPt25c29kqFd8ckZoN3Jzic/NKzfu3759e3T00mkRUv424kujIzdu3BgZvXpaLBb/25djIhAEgIPg5z/kG2IBWgQK4ApGAAAAAElFTkSuQmCC'
              }
            />
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default YawningFace
