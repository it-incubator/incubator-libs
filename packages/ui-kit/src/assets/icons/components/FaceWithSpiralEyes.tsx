import { IconProps, IconWrapper } from '../IconWrapper'

const FaceWithSpiralEyes = (allProps: IconProps) => {
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
          <path d={'M0 0h72v72H0z'} fill={'url(#prefix__pattern0)'} />
          <defs>
            <pattern
              height={1}
              id={'prefix__pattern0'}
              patternContentUnits={'objectBoundingBox'}
              width={1}
            >
              <use transform={'scale(.01389)'} xlinkHref={'#prefix__image0_4624_20506'} />
            </pattern>
            <image
              height={72}
              id={'prefix__image0_4624_20506'}
              width={72}
              xlinkHref={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC/VBMVEUAAADHbgbLcAjkggjJbw7yhwf6rir4qBm4YAzEZg3XeAfNbQvqiAnScQnujArTcQ3HaQ30lQ/FagrWdQj0oBbLaw3JagzoggbFaAy5Ygr3qyDshwf/qRy6YwvSdQbNbQ7ogAXRcwnffQfzkw/Gag7Tcgv6qR/1mg/kfgfvhQbffQf2lg7aeAjPcwj0mxX4pR74pRtwOQL/rRd0OwL/uiB7RAX+qRX/sxx4PgL/tx5+SAd2PQL6oQ/3nAz+xCj/wCX62TL7pRDylQn8zS/+yC1sNgL//KT/wSj8phP4nw55QQT61DH/sBn70DH/sRrfgQtpMwL/xivOdA3ujwmCSwj//c///bf//If+4zeNWw///t3//Jn//JL+yi/83jXqjwrnigrzmQn//bz//Kr/viLhhwvukwrlhQljLwL//cX//cD+qxaFUgz//cn//LLYeQz2mQv//ur//H/951+pgBuSYxTTeQ3qjAn/+3X/6Tv6mhSJVAzkigr//tj/737/+nv/8GzzkQniggn//I3lzzTavy/+0i7+uSj8uCP6sh79lROzfRP5jQvcfgv//uT//a7//J3/85D/8of/+23/9Fb/8035zyrqwCmfdBucbhLbggzXfgz/8Hb/6Wv96E/r10f+3T/9xjvz3zj9yDXeyDS+mSW6kR+2ihnbewv//tP/917/70L65Dzs1TfAnTL+1i7zwSX+qyOXahbUcw3/9Jj9zVTqyUL+2jHPty/9pCn9oCH/55T/+2X8t0X9zkH+1j/9wDa2kzH8uTDMqyrhpBv//vT/86P+1nj/5nf+5EX7tzr+rDT11TH9zCf+yCbHoybbsSP9mxvXohr6rRWlcxGdXgqUWQr/9az/7J3/3m7+y2n9xEX1yz7IrDjwyS/3xyeuiyOoeBXVihT/64n/3Yj/94L+1mX+3Fz8wlj+11DfzkzQt0Tz4UHasTengCewcA3/5YH6w1DrvzvjuDL/zyPPnRzIkxn/4FThkhbBhBHcwEPxsiCnZgxYJAH+2B/KrYnJAAAAMXRSTlMABxQs/fn+/mGrHKBiYVb4x6FwVfjYtKWRKP6vpjcO9MbAnYfo5+XE6NuJ2NG2bs/Oc9MKPwAACuBJREFUWMPU0EFIwlAcx/HmKEHGYCAEFV0GSgXVqehih6BOHTdi00t12WBBeBP02CzCpvfC6LSTDBZhIxWhlQlCpw085qW70C36v4dTSDGtU9/LYL/Hh+1N/McI6I+Cj6SX2Tkcu0yTPuJXCkkxq6GpauUaV6lOhVYYihzX8tFM6FSt3JTK5XIegkcJYwztG4ehwv50ZOvkLl+Lp3JZ08xmU5dXtfLuTUWdCVOjUgQd9m9E2p97Vzlezzx2OhYk+7JWiO2k/WF6fhSHZILrh8Ck9oXjb2U4M15obJ4GGXKEz1laS0fa+ZwioDK9BFzSiZ9E0mtLFPHD7bBBQ20UUpLOcZyuJ5OCVxLSdXjJme8N1QiyQ28qwCTA+XAUSZIUpWPhMMIpeJCfY6qRYAJDnNmEUY0976NkGVmA4TxElmW0uSWQZgNDnGL1+o0/gngeWYCBBiEEGzzPo9W+HSLNT58VX5qW4xxAFx0MNFTPuECr42BpeuA9Eez5fR0c295GeVg3MBCCR9u23Vv1/nyRGADRk6/1h5brmqYpipqmeRqua2iaKIpwxHWtpvE6SfU75MJZsf7kWllUNBoVPa2bhhGY8BHLar0YiQWy78e+yCi/kCbiOIATkT1UL/UQFEX1FFEPP34cXHdEPXREB8FBB91B+Noe9tR24DXIf1vptqeauwZtN83dwOkSQU1NUxdMzVLHEDbddEznnH/atCYEQb/fcjXr8/BjfL8/Pvf7/mGnUWHxoaF0+gWmsbHxIbaVQAIMDqD4g9KFdDo9FK4atJ8+/19h1oHhlZV8/ilmdXX1AaIR+/bBv3EMpZ6WyOdXsqi4E/9s9AX8oJX8xMTEa0xtbe1jxIMD4AhKvC6BbobDU4P2Cwd34Dh+UDgci7nd7rrf1NTUYl2ZWkwNTryuq3NjYrFwdsCK+n3wQXOf4sgTMxgMa31bPk0Lbql1L2sqeVmnJnyab0s1uN3o1k4hk4l/mrNfqFymU0esg8PxTGZtzbC+laIYHYLhjX0dL//S0WckOBTneH8f+lxQ19ObiRcGrUdOVYzskt06kI0jz96iDegYQBMEDRgd6/O8L+MIESjBEiSKm3b3DNs/dcH13myV1X76UMUOocqyvb3r6zuSDrDS2EYutzEmkYwutdnxG8cMw5BS8AeKi5CjdvdyFGda7C1MzdkvH65s9dwwFu2IHBQ3DA6Px+PoMCT0kDN6HCUsNKCCho4WlFC3WUZa9IxBEBopDA9aKzbgEm5RYWGkNcqRr1TPh92izVZUJh05kWZmWjCbEkMlHJO7mk1TJj3bJJjx9vHAOLIwjOZ26dCfmeHhLyyMfAd0j+pVbATDcQzhn27J6YG+DYveAXK5pbPIchzHz06qJuD64O2BUmvrVNUT+9Xy3A5ftj8ZmBpt7RaBvt2rzHOApigIuOitliD6dgCRAno1EAKA5VnOlJw0QlPSi49RJKq/fK48/Ib6J1VTo28ikNS8Sy6OlBKqmkBl+eRNEbjkQKBNhK8C1RLgE6qfALOCRlJKv5/mldFxJGooN+nkIyQaH79tA3z7s+8AtUm4d082i0CcDhhpfZcsmynaFzATpBZIRnnWUu0n+eQzP9Qrd0qik/uiK0h0pup5twR7pp0uoDf3f5yfV2QfybbLPpoyIxFBz8gWlg3JIdTGNqcLitPOFBSTz5vO3K1/dKw8tIb6u0ebm7pN0PgWH9Xdet3PGSHEshbZB0siCmroYP39bcvLXf0RikY3RehaamrGomuH9v+KGupvIJGih/5vCkVq/bMMcHU5UyxvFvyQ7xIE1KNodWcPyUecguD8KJKU5VuEoLUvTc1Hkejivuhsw30kuo5FnxWe9L+1sIQtYqPIV523XFBqEwTZCHlFeEew1Ndi8StPksu3lqI0Zbl5vfnojft/Rb+qsXfYJOI4DuBiSISQxqZKRRNtTHQxLnB39LjjUV7hWY4CAx2kkBQ6QAJDCwMskhbbNKwE262gMpTWtEllMmlkLNqIdKpWWX000ZjUV+Lv/6cnTXy7+S3pcMMn39//7vhzx3kT+uYgdH3ReDbKPils3aR8PsruK/u3Gfa5PxDw1+zs/OryLYomCELO2ieXGu8ptlgg5+b0CW+Wh85wqRBAWljCu7lJ1re9On2TYZipGX/hJkvNABRYWqOp96vLtSnGbmemHi016jEopCXnmvqQN4vWCC92PmVQN126OyxVb9QouvVpdWmmNvPKvzfP0pPLAYh/hqGZ9wX/q3KtVl66t/c4TdhvFUjVYFMdSnH9h9CVfDBi0zdJmOOFzjFJszuP7zruDe1tP2Hp9HRgaAg+yyt21r5fh+P3Cnfr8xRBT26Nk6pm02YI5mX8BVnJRDR6hWsPBnn8sLpGE1Rr/sOHzwxBx2b8Qygg3WJYOT4+32LkBPV8SweFFHpNJFPp42+RZHgspI46x7ft7icPG9VJipCb4Y+g18rYwYEFouVwFH3o0QdDOijkisISheMi/qa9zAUNNqXC1bgde/BQZxqqFWMMxfiKT18FHA5Hx3E4AksPimmGophY8VE1h5xBp9JmSGUv8zft8av5zmyqwlZDp9Nqc4FquVyuLiOmm+HhwHJ1ulyergZyWnCgEJosyEm/ff1L4hPekFrpHFSR5DiStKbcai5nNA4PD39jIEajMQeHR7Q6cHAhdcIbrkgEPNSzDrOhSh3JYtFqR0yma0YkdWOEmEwjWq3F0nFcCitMxsES8Tl7uTLhTaiVMFynE5YQhcMr10zgjGgtnT6HhSbyl892tyNJPJsyaKxRGA5JuNQIppCFkWuHzBEHF8pWxIIjG+RJXMkKw6Hp8Hg8xQczyBnHc8FgnUInRUe37Iu4kl6pcIIEIXU8BemUwW1m52ZJYLAT1Wuup7LxXjhn3fSgSgabFSQodbDfVukwNXu6Xv9kAQQxunPtz6399olDx2pDhdb7MNCtBCcODYc6ze18kQtPkOPkuXaLMhPp/fqsBU7VXDuN9/7WgWvQCY46cT3IdQt1Vymbuq7B0mzRLTfvJNueHbNbLoe9nvjcPn36oGU2s3bKzrp9B06F0qpGg1X4FTpy4tYrEykDkqKut0XKbjbL3WaaSq9N+eyE28z4CDdNTa283ExT5p0TUXAMaDDxhe9+jErX8xNekPRKpWt3ZZSiWZoa3dy4v/vyTYxi5XKWim1ulHSl17CNfuo4XFx6/th36RmIc0EswXiWtytvim9WNkqkirTc/7hZHE2vPf9YUrmcihvvNl9HkQMLBIN9H4HsJJYSNrUVSllKpZJFNYiiGi/tbmzslkin06lQKJ03oraOsy4T/PARS+KJc7BOCVxKGVUo4FpwuRCF/rswE1Va9WpNwjCGHPHxnzzU9GMpYtDYeAosJ2hOhIACjFVt04QiqQlw+uEm+6mUzIdhvBCmkAUYCkZA0QOTgLHC+eQvHJAkwmSFy0ApRIEFGA4gSEFtDJFUhssnT4p/4cA6yQY8cSg1BlQCW3ywkgBmLBiGsQZkv3loF/RIPclFDqiOpbEdRoMVzFSSHqlI8PvHdckAUAvhDNSKANaJARBQMmGYyjMghuvw97lwqleIKC6cyYx1g5TwwmLSI+wVXfjTVxo9mFpcWAiHQUMJA7KwiJm+v3o7ckp8SejxJJGGs4gQj/CSWATMX0VwtkcivSQUAocjFF6SikVnBf/2Iuq8qE8m7u/t7RfL+kTnj3eVf+Jwjv1/+QoK6cdZ+/8PKAAAAABJRU5ErkJggg=='
              }
            />
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}

export default FaceWithSpiralEyes
